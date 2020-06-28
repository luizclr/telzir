import React, { FormEvent, useState } from 'react';
import '../styles/App.css';

import { CITY_CODE } from "../consts";

import { calculateCallValues } from "../utils";

const App = () => {
  const [originCode, setOriginCode] = useState<number>();
  const [destinyCode, setDestinyCode] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [plan, setPlan] = useState<number>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (originCode && destinyCode && minutes && plan) {

      const value = calculateCallValues(originCode, destinyCode, minutes, plan);
      console.log(value);
    }
  };

  return (
    <div className="App">
      <div className="card">
        <h1>Telzir</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>from</label>
            <select name="originCode" onChange={(e) => setOriginCode(Number(e.target.value))}>
              <option selected disabled></option>
              {CITY_CODE.map(code => <option key={code}>{code}</option>)}
            </select>
            <label>to</label>
            <select name="destinyCode" onChange={(e) => setDestinyCode(Number(e.target.value))}>
              <option selected disabled></option>
              {CITY_CODE.map(code => <option key={code}>{code}</option>)}
            </select>
            <input name="minutes" type="number" onChange={(e) => setMinutes(Number(e.target.value))}/>
          </div>
          <div>
          <label>plan</label>
            <select name="plan" onChange={(e) => setPlan(Number(e.target.value))}>
              <option selected disabled></option>
              <option>30</option>
              <option>60</option>
              <option>120</option>
            </select>
          </div>
          <div>
            <button type="submit">calcular</button>
          </div>
        </form>
        <div>
          <div>
            <p>fale mais 30</p>
            <p>fale mais 60</p>
            <p>fale mais 120</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
