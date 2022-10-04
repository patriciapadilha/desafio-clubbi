import React from "react";

function PeopleCard({ name, age, gender }) {
  return (
    <section className="people-card">
        <h1>{ name }</h1>
        <h2>{ `Age: ${age}` }</h2>
        <h2>{ `Gender: ${gender}` }</h2>
    </section>
  )
}

export default PeopleCard;