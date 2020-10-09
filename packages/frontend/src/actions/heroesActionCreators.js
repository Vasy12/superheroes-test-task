import ACTION_TYPE from './types';

export const createHero = values => ({
  type: ACTION_TYPE.CREATE_HERO,
  values,
});

export const createHeroRequest = () => ({
  type: ACTION_TYPE.CREATE_HERO_REQUEST,
});

export const createHeroSuccess = data => ({
  type: ACTION_TYPE.CREATE_HERO_SUCCESS,
  hero: data,
});

export const createHeroError = err => ({
  type: ACTION_TYPE.CREATE_HERO_ERROR,
  error: err,
});

export const getHeroes = params => ({
  type: ACTION_TYPE.GET_HEROES,
  params,
});

export const getHeroesRequest = () => ({
  type: ACTION_TYPE.GET_HEROES_REQUEST,
});

export const getHeroesSuccess = data => ({
  type: ACTION_TYPE.GET_HEROES_SUCCESS,
  heroes: data,
});

export const getHeroesError = err => ({
  type: ACTION_TYPE.GET_HEROES_ERROR,
  error: err,
});
