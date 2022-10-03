import React, { useMemo, useState } from 'react';
import Context from './Context';

function Provider( { children }) {
  const [allFilms, setAllFilms] = useState([]);

  const ProviderValue = useMemo(() => (
    {
      allFilms,
      setAllFilms,
    }), [allFilms, setAllFilms]);

  return (
    <Context.Provider value={ ProviderValue }>
      { children }
    </Context.Provider>
  );
}

export default Provider;