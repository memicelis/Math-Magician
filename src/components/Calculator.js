import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    const newCalcData = calculate(calcData, value);
    setCalcData(newCalcData);
    setDisplay(newCalcData.next || newCalcData.total || '0');
  };

  return (
    <div className="calculator">
      <div className="display">
        <input className="input-display" type="text" value={display} />
      </div>
      <div className="buttons">
        <Button value="AC" onClick={handleButtonClick} />
        <Button value="+/-" onClick={handleButtonClick} />
        <Button value="%" onClick={handleButtonClick} />
        <Button value="÷" onClick={handleButtonClick} />
        <Button value="7" onClick={handleButtonClick} />
        <Button value="8" onClick={handleButtonClick} />
        <Button value="9" onClick={handleButtonClick} />
        <Button value="x" onClick={handleButtonClick} />
        <Button value="4" onClick={handleButtonClick} />
        <Button value="5" onClick={handleButtonClick} />
        <Button value="6" onClick={handleButtonClick} />
        <Button value="-" onClick={handleButtonClick} />
        <Button value="1" onClick={handleButtonClick} />
        <Button value="2" onClick={handleButtonClick} />
        <Button value="3" onClick={handleButtonClick} />
        <Button value="+" onClick={handleButtonClick} />
        <Button value="0" onClick={handleButtonClick} />
        <Button value="." onClick={handleButtonClick} />
        <Button value="=" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Calculator;
