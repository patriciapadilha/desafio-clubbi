import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import { getAllFilms } from '../services/api';
import FilmCard from './FilmCard';
import '../css/Results.css';

function Results() {
  const { allFilms , setAllFilms } = useContext(Context);

  const api = async () => {
    const results = await getAllFilms();
    setAllFilms(results);
  }
  
  useEffect(() => {
    api();
    console.log(allFilms);
  }, []);

  return (
    <section className='main-results'>
      { console.log(allFilms) }
      {allFilms && allFilms.map((film) => (
          <FilmCard
            key={ film.id }
            id={ film.id }
            title={ film.title }
            originalTitle={ film.original_title_romanised }
            image={ film.image }
            description={ film.description }
          />
        ))}
    </section>
  )
}

export default Results;