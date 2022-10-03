import React from 'react';
import './App.css';
import Header from './components/Header';
import Results from './components/Results';
import Search from './components/Search';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <Search />
      <Results />
    </Provider>
  );
}

export default App;
