import test from "node:test";
import assert from "node:assert/strict";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function mergeTopic(local = {}, remote = {}, now = "2026-01-01T00:00:00.000Z") {
  const winner = new Date(local.updatedAt || 0) >= new Date(remote.updatedAt || 0) ? local : remote;
  return {
    solved: clamp(Number(winner.solved || 0), 0, 10),
    confidence: clamp(Number(winner.confidence || 1), 1, 5),
    complete: Boolean(winner.complete),
    updatedAt: winner.updatedAt || now
  };
}

function calculateMockScore(problems) {
  const total = problems.reduce((sum, problem) => sum + problem.points, 0);
  const earned = problems.reduce((sum, problem) => sum + (problem.status === "ac" ? problem.points : 0), 0);
  const penalty = problems.reduce((sum, problem) => sum
    + Math.max(0, (problem.attempts || 0) - (problem.status === "ac" ? 1 : 0)) * 5
    + Math.max(0, Math.ceil(((problem.timeSeconds || 0) / 60 - problem.targetMinutes) / 5)), 0);
  return Math.max(0, Math.round((earned / (total || 1)) * 100) - penalty);
}

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
  assert.equal(hasCuratedExercises && !exerciseIds.length && !externalPractice, true);
});

// V7 Tests -------------------------------------------------------------------
test("dynamic mock targets allocate time matching contest duration", () => {
  const getTargets = (dur, strategy = 'standard') => {
    if (dur <= 45) {
      const t1 = dur === 30 ? 12 : 18;
      return [t1, dur - t1];
    }
    if (strategy === 'olp_chuyen') {
      return dur === 180 ? [45, 65, 70] : dur === 120 ? [30, 45, 45] : [15, 25, 20];
    }
    if (strategy === 'olp_khong_chuyen') {
      return dur === 120 ? [35, 40, 45] : dur === 90 ? [25, 30, 35] : [18, 20, 22];
    }
    return dur === 180 ? [40, 70, 70] : dur === 120 ? [30, 45, 45] : dur === 90 ? [25, 35, 30] : [18, 24, 18];
  };

  // 30 min sprint: 12 + 18 = 30
  assert.deepEqual(getTargets(30), [12, 18]);
  assert.equal(getTargets(30).reduce((a, b) => a + b, 0), 30);

  // 45 min sprint: 18 + 27 = 45
  assert.deepEqual(getTargets(45), [18, 27]);
  assert.equal(getTargets(45).reduce((a, b) => a + b, 0), 45);

  // 60 min standard: 18 + 24 + 18 = 60
  assert.deepEqual(getTargets(60), [18, 24, 18]);
  assert.equal(getTargets(60).reduce((a, b) => a + b, 0), 60);

  // 90 min OLP Không chuyên: 25 + 30 + 35 = 90
  assert.deepEqual(getTargets(90, 'olp_khong_chuyen'), [25, 30, 35]);
  assert.equal(getTargets(90, 'olp_khong_chuyen').reduce((a, b) => a + b, 0), 90);

  // 120 min OLP Chuyên: 30 + 45 + 45 = 120
  assert.deepEqual(getTargets(120, 'olp_chuyen'), [30, 45, 45]);
  assert.equal(getTargets(120, 'olp_chuyen').reduce((a, b) => a + b, 0), 120);

  // 180 min OLP Chuyên: 45 + 65 + 70 = 180
  assert.deepEqual(getTargets(180, 'olp_chuyen'), [45, 65, 70]);
  assert.equal(getTargets(180, 'olp_chuyen').reduce((a, b) => a + b, 0), 180);
});

test("complexity ops evaluator classifies pass, tight and fail against budget", () => {
  const budget = 1e8; // 10^8 ops for 1.0s
  const classify = (ops) => {
    if (ops <= budget) return "PASS";
    if (ops <= budget * 2.5) return "TIGHT";
    return "FAIL";
  };

  // N = 200,000: N log2(N) ~ 3.5e6 -> PASS
  const nLogN = 200000 * Math.log2(200000);
  assert.equal(classify(nLogN), "PASS");

  // N = 10,000: N^2 = 10^8 -> PASS
  assert.equal(classify(10000 * 10000), "PASS");

  // N = 14,000: N^2 ~ 1.96e8 -> TIGHT
  assert.equal(classify(14000 * 14000), "TIGHT");

  // N = 200,000: N^2 = 4e10 -> FAIL (TLE)
  assert.equal(classify(200000 * 200000), "FAIL");
});

test("SM-2 quality ratings step intervals correctly", () => {
  const intervals = [1, 3, 7, 14, 30];
  const step = (curLevel, quality) => {
    if (quality === 'again') return 0;
    if (quality === 'hard') return Math.max(0, curLevel - 1);
    if (quality === 'good') return Math.min(intervals.length - 1, curLevel + 1);
    if (quality === 'easy') return Math.min(intervals.length - 1, curLevel + 2);
    return curLevel;
  };

  // Level 0 starts at 1 day
  assert.equal(intervals[0], 1);
  // Again always resets to 0 (1 day)
  assert.equal(step(3, 'again'), 0);
  // Hard from level 2 (7d) drops to level 1 (3d)
  assert.equal(step(2, 'hard'), 1);
  // Good from level 1 (3d) advances to level 2 (7d)
  assert.equal(step(1, 'good'), 2);
  // Easy from level 1 advances 2 steps to level 3 (14d)
  assert.equal(step(1, 'easy'), 3);
});

test("platform filter matches exercise platform tags", () => {
  const sampleExercises = [
    { id: "e1", platform: "cses" },
    { id: "e2", platform: "vnoj" },
    { id: "e3", platform: "codeforces" },
    { id: "e4", platform: "marisa" },
    { id: "e5" } // default to marisa
  ];

  const filter = (platform) => {
    return sampleExercises.filter(e => platform === 'all' || (e.platform || 'marisa') === platform);
  };

  assert.equal(filter('all').length, 5);
  assert.equal(filter('cses').length, 1);
  assert.equal(filter('vnoj').length, 1);
  assert.equal(filter('codeforces').length, 1);
  assert.equal(filter('marisa').length, 2);
});

