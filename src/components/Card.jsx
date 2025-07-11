import React from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';

const Card = ({ card, onAddToCollection }) => {
  return (
    <BootstrapCard className="mb-3">
      <BootstrapCard.Body className="d-flex">
        <img 
          src={card.imageUrl} 
          alt={card.name} 
          style={{ width: '225px', flexShrink: 0, marginRight: '1rem', borderRadius: '5px' }} 
        />
        <div className="flex-grow-1">
          <BootstrapCard.Title>{card.name}</BootstrapCard.Title>
          <BootstrapCard.Subtitle className="mb-2 text-muted">
            {card.manaCost}
          </BootstrapCard.Subtitle>
          <BootstrapCard.Text>
            <strong>Type:</strong> {card.type}<br/>
            <strong>Description:</strong> {card.text}
          </BootstrapCard.Text>
          <Button variant="success" onClick={() => onAddToCollection(card.name)}>
            Add to Collection
          </Button>
        </div>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
