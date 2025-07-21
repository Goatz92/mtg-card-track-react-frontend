import { useState } from 'react';
import { Container, Row, Col, Alert, Button, Form } from 'react-bootstrap';
import './App.css';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import { searchCards, addCardToCollection, fetchRandomCard, registerUser, loginUser } from './services/api';

function App() {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [cards, setCards] = useState([]);
    const [regEmail, setRegEmail] = useState('');
    const [regUsername, setRegUsername] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [notification, setNotification] = useState('');
    const [token, setToken] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await registerUser({ username: regUsername, email: regEmail, password: regPassword });
            setNotification('Registration successful! You can now log in.');
            setRegUsername('');
            setRegEmail('');
            setRegPassword('');
        } catch (err) {
            // Show specific message for duplicate username/email
            if (err.response?.status === 409) {
                setError(err.response.data.message || 'Username or email already exists');
            } else {
                setError('Registration failed. Please try again.');
            }
        }
    };

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

    // Fetch a random card
    const handleRandom = async () => {
        setLoading(true);
        setError(null);
        try {
            const randomCards = await fetchRandomCard();
            setCards(randomCards);
        } catch (err) {
            setError('Failed to fetch random card.');
            console.error(err);
        }
        setLoading(false);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const result = await loginUser({ username: loginUsername, password: loginPassword });
            setToken(result.token);
            setNotification('Login successful!');
            setLoginUsername('');
            setLoginPassword('');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    {/* Login Form */}
                    <Form onSubmit={handleLogin} className="mb-4">
                        <Form.Group controlId="loginUsername" className="mb-2">
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                value={loginUsername}
                                onChange={e => setLoginUsername(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="loginPassword" className="mb-2">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={loginPassword}
                                onChange={e => setLoginPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mb-3">
                            Login
                        </Button>
                    </Form>
                    <h1 className="text-center mb-4">Magic: The Gathering Collection Tracker</h1>
                    {notification && <Alert variant="success">{notification}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    {/* Registration Form */}
                    <Form onSubmit={handleRegister} className="mb-4">
                        <Form.Group controlId="regUsername" className="mb-2">
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                value={regUsername}
                                onChange={e => setRegUsername(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="regEmail" className="mb-2">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                value={regEmail}
                                onChange={e => setRegEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="regPassword" className="mb-2">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={regPassword}
                                onChange={e => setRegPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="secondary" type="submit" className="mb-3">
                            Register
                        </Button>
                    </Form>
                    <SearchBar onSearch={handleSearch} />
                    <div className="text-center mb-3">
                        <Button variant="outline-primary" onClick={handleRandom}>
                            Random Card
                        </Button>
                    </div>
                    {loading && <p className="text-center">Loading...</p>}
                    <CardList cards={cards} onAddToCollection={handleAddToCollection} />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
