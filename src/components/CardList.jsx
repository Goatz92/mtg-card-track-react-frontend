import React from 'react';
import Card from './Card';

const CardList = ({ cards, onAddToCollection, isCollection }) => {
  return (
    <div className="card-list">
      {cards.map(card => (
        <Card
          key={card._id}
          card={card}
          onAddToCollection={onAddToCollection}
          isCollection={isCollection}
        />
      ))}
    </div>
  );
};

export default CardList;
