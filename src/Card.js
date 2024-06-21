import React from "react";

function Card({ name, image }) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default Card;
