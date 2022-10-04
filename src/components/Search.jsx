import React, { useContext } from 'react';
import Context from '../context/Context';
import '../css/Search.css';

function Search() {

  const {
    searchByFilmTitle,
    setSearchByFilmTitle,
    allFilms,
    setFilterFilms,
    seachByRate,
    setSeachByRate,
    comparation,
    setComparation } = useContext(Context);
  
 
  const filter = () => {
    console.log(allFilms);
    const results = allFilms.filter(
      (el) => el.title.toLowerCase().includes(searchByFilmTitle),
    );
    console.log(results);
    setFilterFilms(results);
  }

  const filterByRate = () => {
    if (comparation === 'maior') {
      const results = allFilms.filter((el) => Number(el.rt_score) > seachByRate);
      setFilterFilms(results);
    } else if (comparation === 'igual') {
      const results = allFilms.filter((el) => Number(el.rt_score) === Number(seachByRate));
      setFilterFilms(results)
    } else if (comparation === 'menor') {
      const results = allFilms.filter((el) => Number(el.rt_score) < seachByRate);
      setFilterFilms(results);
    }
  }

  const removeFilter = () => {
    setFilterFilms(allFilms);
  }

  return (
    <section className='filters'>
      <label>
        <input
          type="text"
          placeholder='Seach by title ...'
          onChange={ (event) => setSearchByFilmTitle(event.target.value) }/>
      </label>
      <button
        onClick={ filter }
      >
        Buscar
      </button>
      <label htmlFor='rate-input' className='seach-rate'>
        <p>Search by Rate</p>
        <select
          data-testid="comparison-filter"
          onChange={ (event) => setComparation(event.target.value) }
        >
          <option value='maior'>maior que</option>
          <option value='menor'>menor que</option>
          <option value='igual'>igual a</option>
        </select>
        <input
          type="number"
          placeholder='0'
          onChange={ (event) => setSeachByRate(event.target.value) }
        />
        
      </label>
      <button
        onClick={ filterByRate }
      >
        Buscar
      </button>
      <button
        onClick={ removeFilter }
      >
        All Movies
      </button>
    </section>
    
  )

}

export default Search;