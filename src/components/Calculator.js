import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-grid">
        <div className="output">
          <div className="previous-operand">3000 ÷</div>
          <div className="current-operand">50</div>
        </div>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="side-color">÷</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="side-color">+</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="side-color">*</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="side-color">-</button>
        <button type="button" className="span-2">0</button>
        <button type="button">.</button>
        <button type="button" className="side-color">=</button>
      </div>
    );
  }
}

export default Calculator;
