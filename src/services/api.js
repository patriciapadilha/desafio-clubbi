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

export {
  getAllFilms,
}