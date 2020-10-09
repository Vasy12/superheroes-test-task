import ACTION_TYPE from './types';

export const increment = () => ({
  type: ACTION_TYPE.INCREMENT,
});

export const decrement = () => ({
  type: ACTION_TYPE.DECREMENT,
});

export const setStep = value => ({
  type: ACTION_TYPE.SET_STEP,
  step: value,
});
