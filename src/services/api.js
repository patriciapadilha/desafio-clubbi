import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com',
});

const getAllFilms = async () => {
  const response = api.get('/films')
    .then((returnApiFilms) => {
      const result = returnApiFilms.data;
      return result;
    })
    .catch(() => false);
  return response;
};

const getFilmById = async (id) => {
  const response = api.get(`/films/${id}`)
    .then((returnApiFilm) => {
      const result = returnApiFilm.data;
      return result;
    })
    .catch(() => false);
  return response;
};

const getAllPeople = async () => {
  const response = api.get('/people')
    .then((returnApipeople) => {
      const result = returnApipeople.data;
      return result;
    })
    .catch(() => false);
  return response;
};

const getPeople = async (url) => {
  const response = api.get(url)
    .then((returnApipeople) => {
      const result = returnApipeople.data;
      return result;
    })
    .catch(() => false);
  return response;
};

const getLocations = async (url) => {
  const response = api.get(url)
    .then((returnApiLocations) => {
      const result = returnApiLocations.data;
      return result;
    })
    .catch(() => false);
  return response;
};

export {
  getAllFilms,
  getFilmById,
  getAllPeople,
  getPeople,
  getLocations,
}