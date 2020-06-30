import { getCallingTax, getPlanValues, calculateCallValues } from "../../utils";

describe("Utils", () => {
  describe("getCallingTax()", () => {
    it("should return valid props", () => {
      const { valid, tax } = getCallingTax(11, 16);

      expect(typeof valid).toBe("boolean");
      expect(typeof tax).toBe("number");
    });
  });

  describe("getPlanValues()", () => {
    it("should match return with minutes LESS than plan", () => {
      const minutes = 10;
      const plan = 30;
      const tax = 1.9;

      const result = getPlanValues(minutes, plan, tax);

      expect(result.valid).toBe(true);
      expect(result.withPlan).toBe(0);
      expect(result.withoutPlan).toBe(19);
    });

    it("should match return with minutes GREATER than plan", () => {
      const minutes = 35;
      const plan = 30;
      const tax = 1.9;

      const result = getPlanValues(minutes, plan, tax);

      expect(result.valid).toBe(true);
      expect(parseFloat(result.withPlan.toFixed(2))).toBe(10.45);
      expect(parseFloat(result.withoutPlan.toFixed(2))).toBe(66.5);
    });
  });

  describe("calculateCallValues()", () => {
    it("should render component", () => {
      const { valid, withPlan, withoutPlan } = calculateCallValues(
        11,
        16,
        20,
        30
      );

      expect(typeof valid).toBe("boolean");
      expect(typeof withPlan).toBe("number");
      expect(typeof withoutPlan).toBe("number");
    });
  });
});
