import ACTION_TYPE from './../actions/types';

const initialState = {
  value: 0,
  step: 1,
};

const counterReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ACTION_TYPE.SET_STEP:
      return {
        ...state,
        step: action.step,
      };
    case ACTION_TYPE.INCREMENT: {
      const { value, step } = state;
      return {
        ...state,
        value: value + step,
      };
    }
    case ACTION_TYPE.DECREMENT: {
      const { value, step } = state;
      return {
        ...state,
        value: value - step,
      };
    }
    default:
      return state;
  }
};

export default counterReducer;
