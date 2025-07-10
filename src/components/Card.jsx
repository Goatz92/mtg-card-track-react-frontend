import React from 'react';

const Card = ({ card, onAddToCollection }) => {
  return (
    <div className="card">
      <img src={card.imageUrl} alt={card.name} />
      <div className="card-info">
        <h3>{card.name}</h3>
        <p>{card.manaCost}</p>
        <p>{card.type}</p>
        <p>{card.text}</p>
        <button onClick={() => onAddToCollection(card.name)}>
          Add to Collection
        </button>
      </div>
    </div>
  );
};

export default Card;
