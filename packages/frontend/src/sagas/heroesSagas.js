import { put } from 'redux-saga/effects';
import * as API from './../api';

import * as heroesActionCreators from '../actions/heroesActionCreators';

export function* createHeroSaga({ values }) {
  yield put(heroesActionCreators.createHeroRequest());

  try {
    const {
      data: { data: hero },
    } = yield API.createHero(values);

    yield put(heroesActionCreators.createHeroSuccess(hero));
  } catch (err) {
    yield put(heroesActionCreators.createHeroError(err));
  }
}

export function* getHeroesSaga({ params }) {
  yield put(heroesActionCreators.getHeroesRequest());
  try {
    const {
      data: { data: heroes },
    } = yield API.getHeroes(params);
    yield put(heroesActionCreators.getHeroesSuccess(heroes));
  } catch (err) {
    yield put(heroesActionCreators.getHeroesError(err));
  }
}
