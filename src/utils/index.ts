import { CITIES_COMBINATION, DEFAULT_EXTRA_TAX } from "../consts";
import { ICallCosts } from "../interfaces";

const getPlanValues = (
  minutes: number,
  plan: number,
  tax: number
): ICallCosts => {
  const surplus = minutes - plan;
  const withoutPlan = minutes * tax;
  let withPlan = 0;

  if (minutes > plan) withPlan = surplus * tax * DEFAULT_EXTRA_TAX;

  return { valid: true, withPlan, withoutPlan };
};

const getCallingTax = (
  originCode: number,
  destinyCode: number
): { valid: boolean; tax: number } => {
  const key = `${originCode}-${destinyCode}`;
  let tax = null;
  let valid = true;

  CITIES_COMBINATION.forEach((combination) => {
    if (combination.name === key) tax = combination.value;
  });

  if (tax === null) {
    tax = 0;
    valid = false;
  }

  return { valid, tax };
};

export const calculateCallValues = (
  originCode: number,
  destinyCode: number,
  minutes: number,
  plan: number
): ICallCosts => {
  const { valid, tax } = getCallingTax(originCode, destinyCode);

  if (valid) {
    return getPlanValues(minutes, plan, tax);
  } else {
    return { valid, withPlan: 0, withoutPlan: 0 };
  }
};
