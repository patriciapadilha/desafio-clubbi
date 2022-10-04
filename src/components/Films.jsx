import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import { getAllFilms } from '../services/api';
import FilmCard from './FilmCard';
import '../css/Results.css';

function Results() {
  const { filterFilms, setFilterFilms, setAllFilms } = useContext(Context);

  const api = async () => {
    const results = await getAllFilms();
    setFilterFilms(results);
    setAllFilms(results);
  }
  
  useEffect(() => {
    api();
  }, []);

  return (
    <section className='main-results' data-testid="movie-card">
      { console.log(filterFilms)}
      {filterFilms && filterFilms.map((film) => (
          <FilmCard
            key={ film.id }
            id={ film.id }
            title={ film.title }
            originalTitle={ film.original_title_romanised }
            image={ film.image }
            description={ film.description }
            director={ film.director }
            releaseDate={ film.release_date }
            rtScore={ film.rt_score }
            people={ film.people }
            locations={ film.locations }
          />
        ))}
    </section>
  )
}

export default Results;