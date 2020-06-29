import React from "react";
import "../styles/App.scss";

import Header from "./header";
import Form from "./form";
import CallCosts from "./callCosts";

const App = () => {
  return (
    <div className="App">
      <div className="card">
        <Header />
        <Form />
        <CallCosts callCosts={{ withPlan: 0, withoutPlan: 0 }} />
      </div>
    </div>
  );
};

export default App;
