/**
 * OLP Coach - Shared Core Logic Module
 * Single Source of Truth for testable pure algorithmic business logic.
 * Compatible with Node.js (CommonJS & ESM) and Browser global scripts.
 */

const REVIEW_INTERVALS = [1, 3, 7, 14, 30];
const DEFAULT_OPS_BUDGET = 1e8; // 10^8 operations per 1.0s

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function mergeTopic(local = {}, remote = {}, fallbackTime = "2026-01-01T00:00:00.000Z", maxTarget = 10) {
  const winner = new Date(local.updatedAt || 0) >= new Date(remote.updatedAt || 0) ? local : remote;
  return {
    solved: clamp(Number(winner.solved || 0), 0, maxTarget),
    confidence: clamp(Number(winner.confidence || 1), 1, 5),
    complete: Boolean(winner.complete),
    updatedAt: winner.updatedAt || fallbackTime
  };
}

function calculateMockScore(problems = []) {
  const total = problems.reduce((sum, problem) => sum + (Number(problem.points) || 0), 0);
  const earned = problems.reduce((sum, problem) => sum + (problem.status === "ac" ? (Number(problem.points) || 0) : 0), 0);
  const penalty = problems.reduce((sum, problem) => sum
    + Math.max(0, (Number(problem.attempts) || 0) - (problem.status === "ac" ? 1 : 0)) * 5
    + Math.max(0, Math.ceil(((Number(problem.timeSeconds) || 0) / 60 - (Number(problem.targetMinutes) || 0)) / 5)), 0);
  return Math.max(0, Math.round((earned / (total || 1)) * 100) - penalty);
}

function getContestTargets(dur, strategy = 'standard', problemCount = 3) {
  if (dur <= 45 || problemCount === 2) {
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
}

function classifyComplexityOps(ops, budgetOps = DEFAULT_OPS_BUDGET) {
  if (ops <= budgetOps) return "PASS";
  if (ops <= budgetOps * 2.5) return "TIGHT";
  return "FAIL";
}

function calculateSM2NextLevel(curLevel, quality, maxLevel = REVIEW_INTERVALS.length - 1) {
  const cur = Number(curLevel) || 0;
  if (quality === 'again') return 0;
  if (quality === 'hard') return Math.max(0, cur - 1);
  if (quality === 'good') return Math.min(maxLevel, cur + 1);
  if (quality === 'easy') return Math.min(maxLevel, cur + 2);
  return cur;
}

function matchesPlatformFilter(exercise, filter = 'all') {
  return filter === 'all' || (exercise?.platform || 'marisa') === filter;
}

function filterExercisesByPlatform(exercises = [], filter = 'all') {
  return exercises.filter(e => matchesPlatformFilter(e, filter));
}

function shouldBlockEmptyManualSession(hasCuratedExercises, exerciseCount, externalPractice) {
  return Boolean(hasCuratedExercises && !exerciseCount && !externalPractice);
}

function evaluateCheckpoint(problems = []) {
  let totalScore = 0;
  let acCount = 0;
  let ac0Count = 0;
  let d2Ac0Count = 0;

  for (const p of problems) {
    const isAc = (p.status || '').toUpperCase() === 'AC';
    const hint = p.hint;
    const isHint0 = hint === '0' || hint === 0 || !hint;
    const isHint1 = hint === 'H1' || hint === 1;
    const isHint2 = hint === 'H2' || hint === 2;
    const isD2 = (p.diff || '').includes('D2') || (p.diff || '').includes('D3');

    let pts = 0;
    if (isAc) {
      if (isHint0) {
        pts = 100;
        ac0Count++;
        acCount++;
        if (isD2) d2Ac0Count++;
      } else if (isHint1) {
        pts = 70;
        acCount++;
      } else if (isHint2) {
        pts = 40;
        acCount++;
      }
      // H3 or H4: Disqualified in checkpoint -> 0 pts, not counted in acCount
    }
    totalScore += pts;
  }

  let level = "RETAKE";
  let tier = "L0-L1";
  let passed = false;

  const hasCoreD2Ac = Boolean(problems[2] && (problems[2].status || '').toUpperCase() === 'AC');

  if (ac0Count === 4) {
    level = "TOPIC_MASTERY";
    tier = "L4";
    passed = true;
  } else if (ac0Count >= 3 && d2Ac0Count >= 1 && hasCoreD2Ac) {
    level = "SOLID";
    tier = "L3";
    passed = true;
  } else if ((acCount >= 3 || (ac0Count >= 2 && d2Ac0Count >= 1)) && totalScore >= 220) {
    level = "PASS";
    tier = "L2.5";
    passed = true;
  } else if (acCount >= 2 && d2Ac0Count === 0) {
    level = "TEMPLATE_ONLY";
    tier = "L1.5";
    passed = false;
  } else {
    level = "RETAKE";
    tier = "L0-L1";
    passed = false;
  }

  return {
    totalScore,
    acCount,
    ac0Count,
    d2Ac0Count,
    level,
    tier,
    passed
  };
}

function calculateAntiDelusionMetrics(logs = []) {
  if (!Array.isArray(logs) || logs.length === 0) {
    return {
      totalProblems: 0,
      d0Count: 0,
      d1Count: 0,
      d2Count: 0,
      d3Count: 0,
      acCount: 0,
      ac0Count: 0,
      independenceRate: 0,
      hintDependency: 0,
      recognitionAccuracy: 0,
      qualifyingMasteryCount: 0,
      medianD1Time: 0,
      medianD2Time: 0
    };
  }

  const d0Count = logs.filter(l => l.diff === 'D0').length;
  const d1Logs = logs.filter(l => l.diff === 'D1');
  const d2Logs = logs.filter(l => (l.diff || '').includes('D2'));
  const d3Logs = logs.filter(l => (l.diff || '').includes('D3'));

  const acLogs = logs.filter(l => (l.status || '').toUpperCase() === 'AC');
  const ac0Logs = acLogs.filter(l => l.hint === '0' || l.hint === 0 || !l.hint);
  const dependentLogs = acLogs.filter(l => ['H2', 'H3', 'H4', 2, 3, 4].includes(l.hint));
  const recognizedLogs = logs.filter(l => l.recognition === true || l.recognition === 'true' || l.recognition === '✅');
  const qualifyingLogs = ac0Logs.filter(l => l.diff !== 'D0');

  const independenceRate = Math.round((ac0Logs.length / logs.length) * 100);
  const hintDependency = acLogs.length > 0 ? Math.round((dependentLogs.length / acLogs.length) * 100) : 0;
  const recognitionAccuracy = Math.round((recognizedLogs.length / logs.length) * 100);

  const getMedian = (times) => {
    if (!times.length) return 0;
    const sorted = [...times].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
  };

  const medianD1Time = getMedian(d1Logs.map(l => Number(l.timeMinutes || 0)).filter(t => t > 0));
  const medianD2Time = getMedian(d2Logs.map(l => Number(l.timeMinutes || 0)).filter(t => t > 0));

  return {
    totalProblems: logs.length,
    d0Count,
    d1Count: d1Logs.length,
    d2Count: d2Logs.length,
    d3Count: d3Logs.length,
    acCount: acLogs.length,
    ac0Count: ac0Logs.length,
    qualifyingMasteryCount: qualifyingLogs.length,
    independenceRate,
    hintDependency,
    recognitionAccuracy,
    medianD1Time,
    medianD2Time
  };
}

const TrackerLogic = {
  clamp,
  mergeTopic,
  calculateMockScore,
  getContestTargets,
  classifyComplexityOps,
  calculateSM2NextLevel,
  matchesPlatformFilter,
  filterExercisesByPlatform,
  shouldBlockEmptyManualSession,
  evaluateCheckpoint,
  calculateAntiDelusionMetrics,
  REVIEW_INTERVALS,
  DEFAULT_OPS_BUDGET
};

// Universal export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TrackerLogic;
  Object.assign(module.exports, TrackerLogic);
}

if (typeof globalThis !== 'undefined') {
  globalThis.TrackerLogic = TrackerLogic;
}

