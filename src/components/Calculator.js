import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.clickFunction = this.clickFunction.bind(this);
  }

  clickFunction = (e) => {
    this.setState((currentState) => calculate({
      total: currentState.total,
      next: currentState.next,
      operation: currentState.operation,
    }, e.target.name));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="calculator">
          <output className="input-output">
            {total || ''}
            {operation || ''}
            {next || ''}
          </output>
          <div className="div-line1">
            <button type="button" onClick={this.clickFunction} name="AC" className="ac-btn">AC</button>
            <button type="button" onClick={this.clickFunction} name="+/-" className="plus-minus-btn">&#177;</button>
            <button type="button" onClick={this.clickFunction} name="&#37;" className="percent-btn">&#37;</button>
            <button type="button" onClick={this.clickFunction} name="&#247;" className="divide-btn">&#247;</button>
          </div>
          <div className="div-line2">
            <button type="button" onClick={this.clickFunction} name="7" className="seven-btn">7</button>
            <button type="button" onClick={this.clickFunction} name="8" className="eight-btn">8</button>
            <button type="button" onClick={this.clickFunction} name="9" className="nine-btn">9</button>
            <button type="button" onClick={this.clickFunction} name="x" className="multiply-btn">&#215;</button>
          </div>
          <div className="div-line3">
            <button type="button" onClick={this.clickFunction} name="4" className="four-btn">4</button>
            <button type="button" onClick={this.clickFunction} name="5" className="five-btn">5</button>
            <button type="button" onClick={this.clickFunction} name="6" className="six-btn">6</button>
            <button type="button" onClick={this.clickFunction} name="-" className="subtract-btn">&#8722;</button>
          </div>
          <div className="div-line4">
            <button type="button" onClick={this.clickFunction} name="1" className="one-btn">1</button>
            <button type="button" onClick={this.clickFunction} name="2" className="two-btn">2</button>
            <button type="button" onClick={this.clickFunction} name="3" className="three-btn">3</button>
            <button type="button" onClick={this.clickFunction} name="&#43;" className="plus-btn">&#43;</button>
          </div>
          <div className="div-line5">
            <button type="button" onClick={this.clickFunction} name="0" className="zero-btn">0</button>
            <button type="button" onClick={this.clickFunction} name="." className="fullstop-btn">&#8901;</button>
            <button type="button" onClick={this.clickFunction} name="&#61;" className="equals-btn">&#61;</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
