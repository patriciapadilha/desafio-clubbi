import React from 'react';
import './App.css';
import Header from './components/Header';
import Films from './components/Films';
import Search from './components/Search';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <Search />
      <Films />
    </Provider>
  );
}

export default App;
