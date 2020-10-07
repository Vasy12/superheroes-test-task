import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Counter(props) {
  const { value, step, increment, decrement, setStep } = props;

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

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired,
};

function mapStateToProps({ counter }) {
  return counter;
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () =>
      dispatch({
        type: 'INCREMENT',
      }),
    decrement: () =>
      dispatch({
        type: 'DECREMENT',
      }),
    setStep: v =>
      dispatch({
        type: 'SET_STEP',
        value: v,
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
