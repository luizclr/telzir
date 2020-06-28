import { CITIES_COMBINATION, DEFAULT_EXTRA_TAX } from "../consts";
import { IPlan } from "../interfaces";

const getPlanValues = (minutes: number, plan: number, tax: number): IPlan => {
  const surplus =  minutes - plan;
  const withoutPlan = minutes * tax;
  let withPlan = 0;

  if (minutes > plan) withPlan = surplus * tax * DEFAULT_EXTRA_TAX;

  return { withPlan, withoutPlan };
};

const getCallingTax = (originCode: number, destinyCode: number): number => {
  const key = `${originCode}-${destinyCode}`;
  let tax = 0

  CITIES_COMBINATION.forEach(combination => {
    if (combination.name === key) tax = combination.value;
  });

  return tax;
};

export const calculateCallValues = (
    originCode: number,
    destinyCode: number,
    minutes: number,
    plan: number,
  ): object => {
    const tax = getCallingTax(originCode, destinyCode);
    const values = getPlanValues(minutes, plan, tax);

    return values;
};
