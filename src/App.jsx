import { useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import './App.css';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import { searchCards, addCardToCollection } from './services/api';

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState('');

  const handleSearch = async (searchTerm) => {
    if (!searchTerm.trim()) {
      setError('Please search for a specific card.');
      setCards([]);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const results = await searchCards(searchTerm);
      setCards(results);
    } catch (err) {
      setError('Failed to fetch cards. Please try again.');
      console.error(err);
    }
    setLoading(false);
  };

  const handleAddToCollection = async (cardName) => {
    try {
      const result = await addCardToCollection(cardName);
      setNotification(`${result.data.name} was added to your collection.`);
      setTimeout(() => setNotification(''), 3000);
    } catch (err) {
      setError('Failed to add card to collection.');
      console.error(err);
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Magic: The Gathering Collection Tracker</h1>
          {notification && <Alert variant="success">{notification}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <SearchBar onSearch={handleSearch} />
          {loading && <p className="text-center">Loading...</p>}
          <CardList cards={cards} onAddToCollection={handleAddToCollection} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
