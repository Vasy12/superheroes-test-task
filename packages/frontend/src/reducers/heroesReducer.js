import ACTION_TYPE from '../actions/types';

const initialState = {
  heroes: [],
  error: null,
  isFetching: false,
};
const heroesReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ACTION_TYPE.GET_HEROES_REQUEST:
    case ACTION_TYPE.CREATE_HERO_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case ACTION_TYPE.CREATE_HERO_SUCCESS: {
      const { hero } = action;
      const { heroes } = state;
      return {
        ...state,
        heroes: [...heroes, hero],
        isFetching: false,
      };
    }

    case ACTION_TYPE.GET_HEROES_SUCCESS: {
      const { heroes } = action;
      return {
        ...state,
        heroes,
        isFetching: false,
      };
    }
    case ACTION_TYPE.GET_HEROES_ERROR:
    case ACTION_TYPE.CREATE_HERO_ERROR: {
      const { error } = action;
      return {
        ...state,
        error,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};

export default heroesReducer;
