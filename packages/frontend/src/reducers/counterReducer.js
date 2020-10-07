const initialState = {
  value: 0,
  step: 1,
};
const counterReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case 'SET_STEP':
      return {
        ...state,
        step: action.value,
      };
    case 'INCREMENT':
      const { value, step } = state;
      return {
        ...state,
        value: value + step,
      };
    case 'DECREMENT':
      return {
        ...state,
        value: state.value - state.step,
      };
    default:
      return state;
  }
};

export default counterReducer;
