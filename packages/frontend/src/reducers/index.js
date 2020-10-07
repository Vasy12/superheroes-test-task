import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import heroesReducer from './heroesReducer';
import powersReducer from './powersReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  heroes: heroesReducer,
  powers: powersReducer,
});

export default rootReducer;
