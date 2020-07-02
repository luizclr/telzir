import React from "react";
import "../styles/components/callCosts.scss";

import { ICallCosts } from "../interfaces";
type ComponentProps = { callCosts: ICallCosts };

/**
 * Call costs component.
 *
 * @param {ICallCosts} callCosts - Call costs interface
 * @return {React.StatelessComponent} Component
 */
const CallCosts = ({ callCosts }: ComponentProps) => (
  <div className="call-costs">
    <div className="call-costs__row">
      <p>With plan:</p>
      <span id="withPlan">
        {callCosts.valid ? `$ ${callCosts.withPlan.toFixed(2)}` : "-"}
      </span>
    </div>
    <div className="call-costs__row">
      <p>Without plan:</p>
      <span id="withoutPlan">
        {callCosts.valid ? `$ ${callCosts.withoutPlan.toFixed(2)}` : "-"}
      </span>
    </div>
  </div>
);

CallCosts.defaultProps = {
  callCosts: {
    valid: false,
    withPlan: 0,
    withoutPlan: 0,
  },
};

export default CallCosts;
