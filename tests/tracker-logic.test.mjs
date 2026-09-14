import test from "node:test";
import assert from "node:assert/strict";
import TrackerLogic from "../tracker-logic.js";

const {
  clamp,
  mergeTopic,
  calculateMockScore,
  getContestTargets,
  classifyComplexityOps,
  calculateSM2NextLevel,
  filterExercisesByPlatform,
  shouldBlockEmptyManualSession,
  evaluateCheckpoint,
  calculateAntiDelusionMetrics,
  REVIEW_INTERVALS
} = TrackerLogic;

test("newer topic state wins cloud merge", () => {
  const result = mergeTopic(
    { solved: 8, confidence: 4, updatedAt: "2026-01-02T00:00:00Z" },
    { solved: 2, confidence: 2, updatedAt: "2026-01-01T00:00:00Z" }
  );
  assert.deepEqual(result, { solved: 8, confidence: 4, complete: false, updatedAt: "2026-01-02T00:00:00Z" });
});

test("topic merge clamps invalid values", () => {
  const result = mergeTopic({ solved: 99, confidence: -4, complete: 1, updatedAt: "2026-01-03T00:00:00Z" });
  assert.equal(result.solved, 10);
  assert.equal(result.confidence, 1);
  assert.equal(result.complete, true);
});

test("mock score applies attempt and time penalties", () => {
  assert.equal(calculateMockScore([
    { points: 50, status: "ac", attempts: 2, timeSeconds: 24 * 60, targetMinutes: 18 },
    { points: 100, status: "wa", attempts: 2, timeSeconds: 30 * 60, targetMinutes: 24 }
  ]), 14);
});

test("manual progress must be explicitly marked as external", () => {
  const hasCuratedExercises = true;
  const exerciseIds = [];
  const externalPractice = false;
  assert.equal(shouldBlockEmptyManualSession(hasCuratedExercises, exerciseIds.length, externalPractice), true);
  assert.equal(shouldBlockEmptyManualSession(hasCuratedExercises, 1, externalPractice), false);
  assert.equal(shouldBlockEmptyManualSession(hasCuratedExercises, 0, true), false);
});

// V7 Tests -------------------------------------------------------------------
test("dynamic mock targets allocate time matching contest duration", () => {
  // 30 min sprint: 12 + 18 = 30
  assert.deepEqual(getContestTargets(30), [12, 18]);
  assert.equal(getContestTargets(30).reduce((a, b) => a + b, 0), 30);

  // 45 min sprint: 18 + 27 = 45
  assert.deepEqual(getContestTargets(45), [18, 27]);
  assert.equal(getContestTargets(45).reduce((a, b) => a + b, 0), 45);

  // 60 min standard: 18 + 24 + 18 = 60
  assert.deepEqual(getContestTargets(60), [18, 24, 18]);
  assert.equal(getContestTargets(60).reduce((a, b) => a + b, 0), 60);

  // 90 min OLP Không chuyên: 25 + 30 + 35 = 90
  assert.deepEqual(getContestTargets(90, 'olp_khong_chuyen'), [25, 30, 35]);
  assert.equal(getContestTargets(90, 'olp_khong_chuyen').reduce((a, b) => a + b, 0), 90);

  // 120 min OLP Chuyên: 30 + 45 + 45 = 120
  assert.deepEqual(getContestTargets(120, 'olp_chuyen'), [30, 45, 45]);
  assert.equal(getContestTargets(120, 'olp_chuyen').reduce((a, b) => a + b, 0), 120);

  // 180 min OLP Chuyên: 45 + 65 + 70 = 180
  assert.deepEqual(getContestTargets(180, 'olp_chuyen'), [45, 65, 70]);
  assert.equal(getContestTargets(180, 'olp_chuyen').reduce((a, b) => a + b, 0), 180);
});

test("complexity ops evaluator classifies pass, tight and fail against budget", () => {
  // N = 200,000: N log2(N) ~ 3.5e6 -> PASS
  const nLogN = 200000 * Math.log2(200000);
  assert.equal(classifyComplexityOps(nLogN), "PASS");

  // N = 10,000: N^2 = 10^8 -> PASS
  assert.equal(classifyComplexityOps(10000 * 10000), "PASS");

  // N = 14,000: N^2 ~ 1.96e8 -> TIGHT
  assert.equal(classifyComplexityOps(14000 * 14000), "TIGHT");

  // N = 200,000: N^2 = 4e10 -> FAIL (TLE)
  assert.equal(classifyComplexityOps(200000 * 200000), "FAIL");
});

test("SM-2 quality ratings step intervals correctly", () => {
  // Level 0 starts at 1 day
  assert.equal(REVIEW_INTERVALS[0], 1);
  // Again always resets to 0 (1 day)
  assert.equal(calculateSM2NextLevel(3, 'again'), 0);
  // Hard from level 2 (7d) drops to level 1 (3d)
  assert.equal(calculateSM2NextLevel(2, 'hard'), 1);
  // Good from level 1 (3d) advances to level 2 (7d)
  assert.equal(calculateSM2NextLevel(1, 'good'), 2);
  // Easy from level 1 advances 2 steps to level 3 (14d)
  assert.equal(calculateSM2NextLevel(1, 'easy'), 3);
});

test("platform filter matches exercise platform tags", () => {
  const sampleExercises = [
    { id: "e1", platform: "cses" },
    { id: "e2", platform: "vnoj" },
    { id: "e3", platform: "codeforces" },
    { id: "e4", platform: "marisa" },
    { id: "e5" } // default to marisa
  ];

  assert.equal(filterExercisesByPlatform(sampleExercises, 'all').length, 5);
  assert.equal(filterExercisesByPlatform(sampleExercises, 'cses').length, 1);
  assert.equal(filterExercisesByPlatform(sampleExercises, 'vnoj').length, 1);
  assert.equal(filterExercisesByPlatform(sampleExercises, 'codeforces').length, 1);
  assert.equal(filterExercisesByPlatform(sampleExercises, 'marisa').length, 2);
});

test("mock contest handles variable problem counts (e.g. 2-problem sprint)", () => {
  const problems = [
    { points: 60, status: "ac", attempts: 1, timeSeconds: 10 * 60, targetMinutes: 12 },
    { points: 100, status: "ac", attempts: 2, timeSeconds: 15 * 60, targetMinutes: 18 }
  ];
  // Earned 160 / 160 points = 100 base score
  // Penalty: problem 1 has attempts 1 (0 penalty), time 10m <= 12m (0 penalty)
  // Problem 2 has attempts 2 (1 extra attempt = 5 penalty), time 15m <= 18m (0 penalty)
  // Total score = 100 - 5 = 95
  assert.equal(calculateMockScore(problems), 95);
  assert.equal(`${problems.filter(p => p.status === 'ac').length}/${problems.length}`, "2/2");
});

test("evaluateCheckpoint accurately ranks 4-problem sessions and handles hint penalties", () => {
  // Scenario 1: 4/4 AC0 -> TOPIC_MASTERY (L4)
  const perfectRun = [
    { id: 'A', diff: 'D1', status: 'AC', hint: '0' },
    { id: 'B', diff: 'D1/D2', status: 'AC', hint: '0' },
    { id: 'C', diff: 'D2', status: 'AC', hint: '0' },
    { id: 'D', diff: 'Mixed D2', status: 'AC', hint: '0' }
  ];
  const perfectResult = evaluateCheckpoint(perfectRun);
  assert.equal(perfectResult.totalScore, 400);
  assert.equal(perfectResult.level, "TOPIC_MASTERY");
  assert.equal(perfectResult.tier, "L4");
  assert.equal(perfectResult.passed, true);

  // Scenario 2: Only A + B AC0, failed C & D -> TEMPLATE_ONLY (L1.5)
  const templateRun = [
    { id: 'A', diff: 'D1', status: 'AC', hint: '0' },
    { id: 'B', diff: 'D1', status: 'AC', hint: '0' },
    { id: 'C', diff: 'D2', status: 'FAIL', hint: '0' },
    { id: 'D', diff: 'Mixed D2', status: 'FAIL', hint: '0' }
  ];
  const templateResult = evaluateCheckpoint(templateRun);
  assert.equal(templateResult.totalScore, 200);
  assert.equal(templateResult.level, "TEMPLATE_ONLY");
  assert.equal(templateResult.tier, "L1.5");
  assert.equal(templateResult.passed, false);

  // Scenario 3: 3 AC, C solved with H1 -> score = 100 + 100 + 70 = 270 -> PASS (L2.5)
  const passWithHint = [
    { id: 'A', diff: 'D1', status: 'AC', hint: '0' },
    { id: 'B', diff: 'D1/D2', status: 'AC', hint: '0' },
    { id: 'C', diff: 'D2', status: 'AC', hint: 'H1' },
    { id: 'D', diff: 'Mixed D2', status: 'FAIL', hint: '0' }
  ];
  const hintResult = evaluateCheckpoint(passWithHint);
  assert.equal(hintResult.totalScore, 270);
  assert.equal(hintResult.level, "PASS");
  assert.equal(hintResult.passed, true);

  // Scenario 4: H3 used -> 0 points for that problem
  const h3Problem = [
    { id: 'A', diff: 'D1', status: 'AC', hint: '0' },
    { id: 'B', diff: 'D1', status: 'AC', hint: 'H3' },
    { id: 'C', diff: 'D2', status: 'FAIL', hint: '0' },
    { id: 'D', diff: 'Mixed D2', status: 'FAIL', hint: '0' }
  ];
  const h3Result = evaluateCheckpoint(h3Problem);
  assert.equal(h3Result.totalScore, 100);
  assert.equal(h3Result.level, "RETAKE");
  assert.equal(h3Result.passed, false);
});

test("calculateAntiDelusionMetrics flags dependency and excludes D0 from mastery", () => {
  const sampleLogs = [
    { diff: 'D0', status: 'AC', hint: '0', recognition: true, timeMinutes: 10 },
    { diff: 'D1', status: 'AC', hint: '0', recognition: true, timeMinutes: 20 },
    { diff: 'D1', status: 'AC', hint: '0', recognition: true, timeMinutes: 24 },
    { diff: 'D2', status: 'AC', hint: 'H2', recognition: false, timeMinutes: 45 },
    { diff: 'D2', status: 'AC', hint: 'H3', recognition: false, timeMinutes: 60 },
    { diff: 'D2', status: 'FAIL', hint: 'H4', recognition: false, timeMinutes: 70 }
  ];

  const metrics = calculateAntiDelusionMetrics(sampleLogs);
  assert.equal(metrics.totalProblems, 6);
  assert.equal(metrics.d0Count, 1);
  assert.equal(metrics.acCount, 5);
  // Only D1 AC0 count as mastery (D0 is excluded!)
  assert.equal(metrics.qualifyingMasteryCount, 2);
  // Independence rate = 3 AC0 / 6 = 50%
  assert.equal(metrics.independenceRate, 50);
  // Hint dependency = 2 dependent ACs (H2, H3) / 5 total ACs = 40%
  assert.equal(metrics.hintDependency, 40);
  // Recognition rate = 3 / 6 = 50%
  assert.equal(metrics.recognitionAccuracy, 50);
  // Median D1 time = median(20, 24) = 22
  assert.equal(metrics.medianD1Time, 22);
});


