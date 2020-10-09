import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPE from '../actions/types';
import * as HeroSagas from './heroesSagas';

function* rootSaga() {
  yield takeLatest(ACTION_TYPE.CREATE_HERO, HeroSagas.createHeroSaga);
  yield takeLatest(ACTION_TYPE.GET_HEROES, HeroSagas.getHeroesSaga);
}

export default rootSaga;
