import React from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';

const Card = ({ card, onAddToCollection, isCollection }) => {
  // Determine data shape for collection vs search/random
  const data = isCollection ? card.card : card;
  const imageSrc = isCollection
    ? data.imageUris?.normal
    : data.imageUrl;
  const name = data.name;

  if (isCollection) {
    // Minimal display for user collection
    return (
      <BootstrapCard className="mb-3 text-center">
        <img
          src={imageSrc}
          alt={name}
          style={{ width: '225px', margin: '0 auto', borderRadius: '5px' }}
        />
        <BootstrapCard.Body>
          <BootstrapCard.Title>{name}</BootstrapCard.Title>
        </BootstrapCard.Body>
      </BootstrapCard>
    );
  }

  // Detailed display for search/random
  return (
    <BootstrapCard className="mb-3">
      <BootstrapCard.Body className="d-flex">
        <img
          src={imageSrc}
          alt={name}
          style={{ width: '225px', flexShrink: 0, marginRight: '1rem', borderRadius: '5px' }}
        />
        <div className="flex-grow-1">
          <BootstrapCard.Title>{name}</BootstrapCard.Title>
          <BootstrapCard.Subtitle className="mb-2 text-muted">
            {data.manaCost}
          </BootstrapCard.Subtitle>
          <BootstrapCard.Text>
            <strong>Type:</strong> {data.type}<br/>
            <strong>Description:</strong> {data.text}
          </BootstrapCard.Text>
          <Button variant="success" onClick={() => onAddToCollection(data.name)}>
            Add to Collection
          </Button>
        </div>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
