import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <input type="text" className="input-output" value={0} disabled />
          <div className="div-line1">
            <button type="button" className="ac-btn">AC</button>
            <button type="button" className="plus-minus-btn">&#177;</button>
            <button type="button" className="percent-btn">&#37;</button>
            <button type="button" className="divide-btn">&#247;</button>
          </div>
          <div className="div-line2">
            <button type="button" className="seven-btn">7</button>
            <button type="button" className="eight-btn">8</button>
            <button type="button" className="nine-btn">9</button>
            <button type="button" className="multiply-btn">&#215;</button>
          </div>
          <div className="div-line3">
            <button type="button" className="four-btn">4</button>
            <button type="button" className="five-btn">5</button>
            <button type="button" className="six-btn">6</button>
            <button type="button" className="subtract-btn">&#8722;</button>
          </div>
          <div className="div-line4">
            <button type="button" className="one-btn">1</button>
            <button type="button" className="two-btn">2</button>
            <button type="button" className="three-btn">3</button>
            <button type="button" className="plus-btn">&#43;</button>
          </div>
          <div className="div-line5">
            <button type="button" className="zero-btn">0</button>
            <button type="button" className="fullstop-btn">&#8901;</button>
            <button type="button" className="equals-btn">&#61;</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
