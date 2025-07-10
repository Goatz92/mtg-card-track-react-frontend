import React from 'react';
import Card from './Card';

const CardList = ({ cards, onAddToCollection }) => {
  return (
    <div className="card-list">
      {cards.map(card => (
        <Card 
          key={card._id} 
          card={card} 
          onAddToCollection={onAddToCollection} 
        />
      ))}
    </div>
  );
};

export default CardList;
