import React from "react";
import "../styles/components/callCosts.scss";

import { ICallCosts } from "../interfaces";
type ComponentProps = { callCosts: ICallCosts };

const CallCosts = ({ callCosts }: ComponentProps) => (
  <div className="call-costs">
    <div className="call-costs__row">
      <p>Com plano:</p>
      <span>R$ {callCosts.withPlan.toFixed(2)}</span>
    </div>
    <div className="call-costs__row">
      <p>Sem plano:</p>
      <span>R$ {callCosts.withoutPlan.toFixed(2)}</span>
    </div>
  </div>
);

CallCosts.defaultProps = {
  callCosts: { withPlan: 0, withoutPlan: 0 },
};

export default CallCosts;
