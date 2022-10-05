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
          data-testid="input-seach-by-title"
          type="text"
          placeholder='Seach by title ...'
          onChange={ (event) => setSearchByFilmTitle(event.target.value) }/>
      </label>
      <button
        data-testId="button-seach-by-title"
        onClick={ filter }
      >
        Search
      </button>
      <label htmlFor='rate-input' className='seach-rate'>
        <p>Search by Rate</p>
        <select
          data-testid="comparation-filter"
          onChange={ (event) => setComparation(event.target.value) }
        >
          <option value='maior'>maior que</option>
          <option value='menor'>menor que</option>
          <option value='igual'>igual a</option>
        </select>
        <input
          data-testid="rate-input"
          type="number"
          placeholder='0'
          onChange={ (event) => setSeachByRate(event.target.value) }
        />
        
      </label>
      <button
        data-testid="search-rate-button"
        onClick={ filterByRate }
      >
        Search
      </button>
      <button
        data-testId="button-remove-filter"
        onClick={ removeFilter }
      >
        All Movies
      </button>
    </section>
    
  )

}

export default Search;