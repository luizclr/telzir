import React from 'react';
import '../styles/App.scss';

import Header from "./header"
import Form from "./form"

const App = () => {


  return (
    <div className="App">
      <div className="card">
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default App;
