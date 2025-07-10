import { useState } from 'react';
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
      // Clear the notification after a few seconds
      setTimeout(() => setNotification(''), 3000);
    } catch (err) {
      setError('Failed to add card to collection.');
      console.error(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Magic: The Gathering Collection Tracker</h1>
      </header>
      <main>
        {notification && <div className="notification">{notification}</div>}
        <SearchBar onSearch={handleSearch} />
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        <CardList cards={cards} onAddToCollection={handleAddToCollection} />
      </main>
    </div>
  );
}

export default App;
