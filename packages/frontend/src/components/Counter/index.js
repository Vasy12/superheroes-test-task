import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActionCreators from '../../actions/counterActionCreators';

function Counter() {
  const { value, step } = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();
  const { increment, decrement, setStep } = bindActionCreators(
    counterActionCreators,
    dispatch
  );

  return (
    <article>
      <h1>{value}</h1>
      <input
        type="number"
        value={step}
        onChange={({ target: { value } }) => setStep(Number(value))}
      />
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </article>
  );
}

export default Counter;
