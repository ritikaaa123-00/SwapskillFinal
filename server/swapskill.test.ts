import { describe, expect, it } from "vitest";
import { calculateCompatibility } from "../shared/matching";

describe("calculateCompatibility", () => {
  it("scores a reciprocal exchange highly", () => {
    const score = calculateCompatibility(
      { teaches: ["Photoshop"], learns: ["Python"], languages: ["English"], availability: ["evenings"] },
      { teaches: ["Python"], learns: ["Photoshop"], languages: ["English"], availability: ["evenings"] },
    );

    expect(score).toBeGreaterThanOrEqual(90);
  });

  it("does not confuse one-sided interest with a reciprocal match", () => {
    const score = calculateCompatibility(
      { teaches: ["Guitar"], learns: ["Piano"] },
      { teaches: ["Python"], learns: ["SQL"] },
    );

    expect(score).toBe(0);
  });

  it("keeps partial contextual overlap useful without overpowering skill intent", () => {
    const score = calculateCompatibility(
      { teaches: ["React"], learns: ["Photography"], languages: ["English"], level: "Intermediate" },
      { teaches: ["Photography"], learns: ["Illustration"], languages: ["English"], level: "Intermediate" },
    );

    expect(score).toBeGreaterThan(40);
    expect(score).toBeLessThan(90);
  });
});
