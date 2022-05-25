import React from 'react';
import calculate from '../Logic/Calculate';
import Button from './Button';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };

    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(buttonName) {
    const { total, next, operation } = this.state;
    const solution = calculate({ total, next, operation }, buttonName);
    this.setState({
      total: solution.total,
      next: solution.next,
      operation: solution.operation,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calc-grid">
        <div className="output">
          <div className="previous-operand">{ next ? total : operation || '' }</div>
          <div className="current-operand">{ next || total}</div>
        </div>
        <Button name="AC" className="" clickEvent={this.clickEvent} />
        <Button name="+/-" className="" clickEvent={this.clickEvent} />
        <Button name="%" className="" clickEvent={this.clickEvent} />
        <Button name="÷" className="side-color" clickEvent={this.clickEvent} />
        <Button name="1" className="" clickEvent={this.clickEvent} />
        <Button name="2" className="" clickEvent={this.clickEvent} />
        <Button name="3" className="" clickEvent={this.clickEvent} />
        <Button name="+" className="side-color" clickEvent={this.clickEvent} />
        <Button name="4" className="" clickEvent={this.clickEvent} />
        <Button name="5" className="" clickEvent={this.clickEvent} />
        <Button name="6" className="" clickEvent={this.clickEvent} />
        <Button name="x" className="side-color" clickEvent={this.clickEvent} />
        <Button name="7" className="" clickEvent={this.clickEvent} />
        <Button name="8" className="" clickEvent={this.clickEvent} />
        <Button name="9" className="" clickEvent={this.clickEvent} />
        <Button name="-" className="side-color" clickEvent={this.clickEvent} />
        <Button name="0" className="span-2" clickEvent={this.clickEvent} />
        <Button name="." className="" clickEvent={this.clickEvent} />
        <Button name="=" className="side-color" clickEvent={this.clickEvent} />
      </div>
    );
  }
}

export default Calculator;
