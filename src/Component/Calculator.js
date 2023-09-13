import React from 'react';
import './Calculator.css';
import Clear from './Clear';

const Calculator = () => (
  <div className="calculator">
    <div className="display">
      <input className="input-display" type="text" />
    </div>
    <div className="buttons">
      <Clear />
      <button className="calculator-button" type="button">
        +/-
      </button>
      <button className="calculator-button" type="button">
        %
      </button>
      <button className="calculator-button" type="button">
        ÷
      </button>
      <button className="calculator-button" type="button">
        7
      </button>
      <button className="calculator-button" type="button">
        8
      </button>
      <button className="calculator-button" type="button">
        9
      </button>
      <button className="calculator-button" type="button">
        x
      </button>
      <button className="calculator-button" type="button">
        4
      </button>
      <button className="calculator-button" type="button">
        5
      </button>
      <button className="calculator-button" type="button">
        6
      </button>
      <button className="calculator-button" type="button">
        -
      </button>
      <button className="calculator-button" type="button">
        1
      </button>
      <button className="calculator-button" type="button">
        2
      </button>
      <button className="calculator-button" type="button">
        3
      </button>
      <button className="calculator-button" type="button">
        +
      </button>
      <button className="calculator-button calculator-button--0" type="button">
        0
      </button>
      <button className="calculator-button" type="button">
        .
      </button>
      <button className="calculator-button" type="button">
        =
      </button>
    </div>
  </div>
);

export default Calculator;
