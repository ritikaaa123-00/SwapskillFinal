export type SkillProfile = {
  teaches: string[];
  learns: string[];
  level?: "Beginner" | "Intermediate" | "Expert";
  availability?: string[];
  languages?: string[];
};

const normalize = (value: string) => value.trim().toLowerCase();

const overlapScore = (left: string[], right: string[]) => {
  const rightSet = new Set(right.map(normalize));
  const matches = left.filter((item) => rightSet.has(normalize(item))).length;
  return left.length === 0 ? 0 : matches / left.length;
};

/**
 * Scores reciprocal intent first, then adds small boosts for shared context.
 * The result is intentionally explainable and stays in the 0–100 range.
 */
export function calculateCompatibility(a: SkillProfile, b: SkillProfile) {
  const aLearnsFromB = overlapScore(a.learns, b.teaches);
  const bLearnsFromA = overlapScore(b.learns, a.teaches);
  const reciprocal = (aLearnsFromB + bLearnsFromA) / 2;
  const language = a.languages?.length && b.languages?.length ? overlapScore(a.languages, b.languages) : 0;
  const availability = a.availability?.length && b.availability?.length ? overlapScore(a.availability, b.availability) : 0;
  const levelBoost = a.level && b.level && a.level === b.level ? 0.05 : 0;

  return Math.round(Math.min(1, reciprocal * 0.8 + language * 0.1 + availability * 0.05 + levelBoost) * 100);
}
