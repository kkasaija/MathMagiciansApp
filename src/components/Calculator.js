import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const state = {
    total: null,
    next: null,
    operation: null,
  };
  const [currentState, toggleState] = useState(state);

  const clickFunction = (e) => {
    toggleState((currentState) => calculate({
      total: currentState.total,
      next: currentState.next,
      operation: currentState.operation,
    }, e.target.name));
  };

  const { total, next, operation } = currentState;
  return (
    <div className="container">
      <div className="calculator">
        <output className="input-output">
          {total || ''}
          {operation || ''}
          {next || ''}
        </output>
        <div className="div-line1">
          <button type="button" onClick={clickFunction} name="AC" className="ac-btn">AC</button>
          <button type="button" onClick={clickFunction} name="+/-" className="plus-minus-btn">&#177;</button>
          <button type="button" onClick={clickFunction} name="&#37;" className="percent-btn">&#37;</button>
          <button type="button" onClick={clickFunction} name="&#247;" className="divide-btn">&#247;</button>
        </div>
        <div className="div-line2">
          <button type="button" onClick={clickFunction} name="7" className="seven-btn">7</button>
          <button type="button" onClick={clickFunction} name="8" className="eight-btn">8</button>
          <button type="button" onClick={clickFunction} name="9" className="nine-btn">9</button>
          <button type="button" onClick={clickFunction} name="x" className="multiply-btn">&#215;</button>
        </div>
        <div className="div-line3">
          <button type="button" onClick={clickFunction} name="4" className="four-btn">4</button>
          <button type="button" onClick={clickFunction} name="5" className="five-btn">5</button>
          <button type="button" onClick={clickFunction} name="6" className="six-btn">6</button>
          <button type="button" onClick={clickFunction} name="-" className="subtract-btn">&#8722;</button>
        </div>
        <div className="div-line4">
          <button type="button" onClick={clickFunction} name="1" className="one-btn">1</button>
          <button type="button" onClick={clickFunction} name="2" className="two-btn">2</button>
          <button type="button" onClick={clickFunction} name="3" className="three-btn">3</button>
          <button type="button" onClick={clickFunction} name="&#43;" className="plus-btn">&#43;</button>
        </div>
        <div className="div-line5">
          <button type="button" onClick={clickFunction} name="0" className="zero-btn">0</button>
          <button type="button" onClick={clickFunction} name="." className="fullstop-btn">&#8901;</button>
          <button type="button" onClick={clickFunction} name="&#61;" className="equals-btn">&#61;</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
