import React, { useState } from "react";
import "../styles/App.scss";

import Header from "./header";
import Form from "./form";
import CallCosts from "./callCosts";

/**
 * App component
 *
 * @return {React.StatelessComponent} Component
 */
const App = () => {
  const [callCosts, setCallCosts] = useState({
    valid: false,
    withPlan: 0,
    withoutPlan: 0,
  });

  return (
    <div data-testid="app" className="App">
      <div className="card">
        <Header />
        <Form setCallCosts={setCallCosts} />
        <CallCosts callCosts={callCosts} />
      </div>
    </div>
  );
};

export default App;
