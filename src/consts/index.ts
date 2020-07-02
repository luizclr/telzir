import { ICombination } from "../interfaces";

/**
 * Cities code's list
 */
export const CITIES_CODE: number[] = [11, 16, 17, 18];

/**
 * Plan numbers' list
 */
export const PLAN_NUMBERS: number[] = [30, 60, 120];

/**
 * Default extra tax when exceeds plan's value
 */
export const DEFAULT_EXTRA_TAX = 1.1;

/**
 * Cities combination - Used to match city code with
 * the respective tax value
 */
export const CITIES_COMBINATION: ICombination[] = [
  { name: "11-16", value: 1.9 },
  { name: "16-11", value: 2.9 },
  //
  { name: "11-17", value: 1.7 },
  { name: "17-11", value: 2.7 },
  //
  { name: "11-18", value: 0.9 },
  { name: "18-11", value: 1.9 },
];
