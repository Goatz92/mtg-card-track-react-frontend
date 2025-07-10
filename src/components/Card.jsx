import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.imageUrl} alt={card.name} />
      <div className="card-info">
        <h3>{card.name}</h3>
        <p>{card.manaCost}</p>
        <p>{card.type}</p>
        <p>{card.text}</p>
      </div>
    </div>
  );
};

export default Card;
