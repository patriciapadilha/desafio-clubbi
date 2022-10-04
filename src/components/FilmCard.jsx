import React, { useEffect, useState } from "react";
import '../css/FilmCard.css';
import { getLocations, getPeople } from "../services/api";
import PeopleCard from "./PeopleCard";

function FilmCard({ id, title, originalTitle, description, rtScore, image , director, releaseDate, people, locations }) {

  const [allPeople, setAllPeople] = useState([]);
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const arrayPeople = people.map(async(el) => {
        if (el === 'https://ghibliapi.herokuapp.com/people/') {
          return false;
        } else {
          const result = await getPeople(el);
          return result;
        }
     });
      const resolvePeople = await Promise.all(arrayPeople);
      setAllPeople(resolvePeople.filter((el) => el !== false)); 
    }
     const fetchLocations = async () => {
      const arrayLocations = locations.map(async(el) => {
        if (el === 'https://ghibliapi.herokuapp.com/locations/') {
          return false;
        } else {
          const result = await getLocations(el);
          return result;
        }
      });
      const resolveLocations = await Promise.all(arrayLocations);
      setAllLocations(resolveLocations.filter((el) => el !== false));
    }
    fetchPeople();
    fetchLocations();
  }, []);

  return (
    <section className="film-card">
      <nav className="nav-abas">
        <ul>
          <li>
            <input readOnly type="radio" checked name={`aba-${ id }`} className="aba" id={ `geral-${ id }` }/>
            <label htmlFor={`geral-${ id }`}>Geral</label>
            <div className="content">
              <img src={ image } alt={ title } />
              <div className="film-card-infos">
                <h1>{ title }</h1>
                <h2>{ `Titulo original: ${originalTitle}` }</h2>
                <h3>{ description }</h3>
                <div>
                  <p>{`Director: ${director} `}</p>
                  <p>{`Release date: ${releaseDate} `}</p>
                  <p>{`Rate: ${rtScore}`}</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <input type="radio" name={`aba-${ id }`} className="aba" id={ `people-${ id }`} />
            <label htmlFor={ `people-${ id }`}>People</label>
            <div className="content">
              <img src={ image } alt={ title } />
              { allPeople.length === 0 && <p>Unavailable</p>}
              { allPeople.length > 0 && 
                <div className="people-card">
                  { allPeople.length > 1 && allPeople.map((el) => (
                    <PeopleCard
                    key={ el.id }
                    id={ el.id }
                    name={ el.name }
                    gender={ el.gender }
                    age={ el.age }
                    />
                    ))}
                </div>
              }
            </div>
          </li>
          <li>
            <input type="radio" name={`aba-${ id }`} className="aba" id={`locations-${ id }`} />
            <label htmlFor={`locations-${ id }`}>Locations</label>
            <div className="content">
              <img src={ image } alt={ title } />
              { allLocations.length === 0 && <p>Unavailable</p>}
            </div>
          </li>
        </ul>
      </nav>
    </section>
  )

}

export default FilmCard;