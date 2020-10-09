const initialState = {
  data: {
    heroInfo: null,
    powers: null,
    images: null,
  },
  isFetching: false,
  error: null,
};

function newHeroReducer(state = initialState, action) {
  return state;
}

export default newHeroReducer;
