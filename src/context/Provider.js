import React, { useMemo, useState } from 'react';
import Context from './Context';

function Provider( { children }) {
  const [allFilms, setAllFilms] = useState([]);
  const [allPeople, setAllPeople] = useState([]);
  const [searchByFilmTitle, setSearchByFilmTitle] = useState('');
  const [filterFilms, setFilterFilms] = useState([]);
  const [seachByRate, setSeachByRate] = useState(0);
  const [comparation, setComparation] = useState('maior');


  const ProviderValue = useMemo(() => (
    {
      allFilms,
      setAllFilms,
      allPeople,
      setAllPeople,
      searchByFilmTitle,
      setSearchByFilmTitle,
      filterFilms,
      setFilterFilms,
      seachByRate,
      setSeachByRate,
      comparation,
      setComparation,
    }), [allFilms, setAllFilms, allPeople, setAllPeople, searchByFilmTitle, setSearchByFilmTitle, filterFilms, setFilterFilms, seachByRate, setSeachByRate, comparation, setComparation]);

  return (
    <Context.Provider value={ ProviderValue }>
      { children }
    </Context.Provider>
  );
}

export default Provider;