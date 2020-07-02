/**
 * Call Costs Interface
 */
export interface ICallCosts {
  valid: boolean;
  withPlan: number;
  withoutPlan: number;
}

/**
 * Combination Interface
 */
export interface ICombination {
  name: string;
  value: number;
}

/**
 * Tax Interface
 */
export interface ITax {
  valid: boolean;
  tax: number;
}
