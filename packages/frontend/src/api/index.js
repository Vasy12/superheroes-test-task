import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

/**
 *
 * @param {*} data
 * @returns {Promise<object>}
 */
export const createHero = data => apiInstance.post('/superheroes', data);

export const getHeroes = params => apiInstance.get('/superheroes');
