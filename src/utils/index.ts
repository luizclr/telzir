import { CITIES_COMBINATION, DEFAULT_EXTRA_TAX } from "../consts";
import { ICallCosts, ITax } from "../interfaces";

/**
 * Get calling tax.
 *
 * returns an object acording to combination code:
 * {
 *    valid,  // true if code have matched
 *    tax,    // if valid, it returns matches tax, else zero.
 * }
 *
 * @param {number} originCode - Origin city code
 * @param {number} destinyCode - Destiny city code
 * @return {ITax}
 */
export const getCallingTax = (
  originCode: number,
  destinyCode: number
): ITax => {
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

/**
 * Get plan values.
 *
 * returns an object acording to combination code:
 * {
 *    valid,        // indicates that object is valid
 *    withPlan,     // calling value with plan
 *    withoutPlan,  // calling value without plan
 * }
 *
 * @param {number} minutes - minutes that costumer spends in calls
 * @param {number} plan - Plan number
 * @param {number} tax - Tax value
 * @return {ICallCosts}
 */
export const getPlanValues = (
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

/**
 * Calculate call values.
 *
 * Check if is a valid match and returns its coresponding values,
 * else it returns a default value
 *
 * @example { valid: true, withPlan: 20.60, withoutPlan: 58.29 }
 * @example { valid: false, withPlan: 0, withoutPlan: 0 }
 *
 * @param {number} originCode - Origin city code
 * @param {number} destinyCode - Destiny city code
 * @param {number} minutes - minutes that costumer spends in calls
 * @param {number} plan - Plan number
 * @return {ICallCosts}
 */
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
