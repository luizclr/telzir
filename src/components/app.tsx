import React, { useState } from "react";
import "../styles/App.scss";

import Header from "./header";
import Form from "./form";
import CallCosts from "./callCosts";

const App = () => {
  const [callCosts, setCallCosts] = useState({
    valid: false,
    withPlan: 0,
    withoutPlan: 0,
  });

  return (
    <div className="App">
      <div className="card">
        <Header />
        <Form setCallCosts={setCallCosts} />
        <CallCosts callCosts={callCosts} />
      </div>
    </div>
  );
};

export default App;
