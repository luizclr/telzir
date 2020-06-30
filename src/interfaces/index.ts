export interface ICallCosts {
  valid: boolean;
  withPlan: number;
  withoutPlan: number;
}

export interface ICombination {
  name: string;
  value: number;
}

export interface ITax {
  valid: boolean;
  tax: number;
}
