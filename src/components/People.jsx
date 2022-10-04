import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import PeopleCard from './PeopleCard';
import '../css/Results.css';
import { getAllPeople } from '../services/api';

function People() {
  const { allPeople , setAllPeople } = useContext(Context);

  const api = async () => {
    const results = await getAllPeople();
    setAllPeople(results);
  }
  
  useEffect(() => {
    api();
    console.log(allPeople);
  }, []);

  return (
    <section className='main-people'>
      {allPeople && allPeople.map((el) => (
          <PeopleCard
            key={ el.id }
          />
        ))}
    </section>
  )
}

export default People;