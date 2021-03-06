import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import heroesReducer from './heroesReducer';
import newHeroReducer from './newHeroReducer';
import powersReducer from './powersReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  heroes: heroesReducer,
  powers: powersReducer,
  newHero: newHeroReducer,
});

export default rootReducer;
