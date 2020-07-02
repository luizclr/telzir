import React, { FormEvent, useState } from "react";

import { CITIES_CODE, PLAN_NUMBERS } from "../consts";

import { calculateCallValues } from "../utils";

type ComponentProps = { setCallCosts: Function };

/**
 * Form component.
 *
 * @param {function} setCallCosts - callback function to update parent information
 * @return {React.StatelessComponent} Component
 */
const Form = ({ setCallCosts }: ComponentProps) => {
  const [originCode, setOriginCode] = useState<number>();
  const [destinyCode, setDestinyCode] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [plan, setPlan] = useState<number>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (originCode && destinyCode && minutes && plan) {
      const values = calculateCallValues(
        originCode,
        destinyCode,
        minutes,
        plan
      );
      setCallCosts(values);
    }
  };

  /**
   * Should disable button - condition to disable button
   */
  const shouldDisableButton = !originCode || !destinyCode || !minutes || !plan;

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="row">
        <div className="form-group">
          <label>From</label>
          <select
            name="originCode"
            onChange={(e) => setOriginCode(Number(e.target.value))}
          >
            <option selected disabled></option>
            {CITIES_CODE.map((code) => (
              <option key={code}>{code}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>To</label>
          <select
            name="destinyCode"
            onChange={(e) => setDestinyCode(Number(e.target.value))}
          >
            <option selected disabled></option>
            {CITIES_CODE.map((code) => (
              <option key={code}>{code}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Minutes</label>
          <input
            name="minutes"
            type="number"
            onChange={(e) => setMinutes(Number(e.target.value))}
          />
        </div>
      </div>
      <div>
        <label>Plan</label>
        <select name="plan" onChange={(e) => setPlan(Number(e.target.value))}>
          <option selected disabled></option>
          {PLAN_NUMBERS.map((plan) => (
            <option key={plan}>{plan}</option>
          ))}
        </select>
      </div>
      <div className="py-10">
        <button
          className={`button button__fill--green ${
            shouldDisableButton && "disabled"
          }`}
          type="submit"
        >
          calculate
        </button>
      </div>
    </form>
  );
};

Form.defaultProps = {
  setCallCosts: () => {},
};

export default Form;
