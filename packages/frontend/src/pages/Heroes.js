import React, { useEffect } from 'react';
import HeroForm from '../components/HeroForm';
import { createHero, getHeroes } from './../actions/heroesActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

export default function Heroes() {
  const { isFetching, heroes, error } = useSelector(state => state.heroes);
  const dispatch = useDispatch();
  const {
    createHero: createHeroAction,
    getHeroes: getHeroesAction,
  } = bindActionCreators(
    {
      createHero,
      getHeroes,
    },
    dispatch
  );

  useEffect(() => {
    getHeroesAction({});
  }, []);

  return (
    <>
      <h1>SUPERHEROES</h1>
      <HeroForm onSubmit={createHeroAction} />
      <ul>
        {heroes.map(h => (
          <li key={h.id}>
            <hr />
            {JSON.stringify(h)}
            <hr />
          </li>
        ))}
        {isFetching && <li>Loading...</li>}
      </ul>
    </>
  );
}
