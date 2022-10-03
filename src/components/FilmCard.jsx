import React from "react";
import '../css/FilmCard.css';

function FilmCard({ title, originalTitle, description, image , id }) {
  return (
    <section className="film-card">
      <div>
        <h1>{ title }</h1>
        <h2>{ `Titulo original: ${originalTitle}` }</h2>
        <h3>{ description }</h3>
        <button>Saber mais</button>
      </div>
      <img src={ image } alt={ title } />
    </section>

  )

}

export default FilmCard;