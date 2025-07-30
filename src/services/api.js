import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const searchCards = async (searchTerm) => {
  try {
    const response = await axios.get(`${API_URL}/cards/search/${searchTerm}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
};

export const addCardToCollection = async (cardName) => {
  try {
    const response = await axios.post(`${API_URL}/cards/scryfall/name/${cardName}`);
    return response.data;
  } catch (error) {
    console.error('Error adding card to collection:', error);
    throw error;
  }
};

export const fetchRandomCard = async () => {
  try {
    const response = await axios.get(`${API_URL}/cards/random`);
    return response.data;
  } catch (error) {
    console.error('Error fetching random card:', error);
    throw error;
  }
};

// Register a new user
export const registerUser = async ({ username, email, password }) => {
  try {
    const response = await axios.post(
      `${API_URL}/users/register`,
      { username, email, password }
    );
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Login an existing user
export const loginUser = async ({ username, password }) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/login`,
      { username, password }
    );
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

// Get cards in a user's collection
export const getUserCollection = async (username, token) => {
  try {
    const response = await axios.get(
      `${API_URL}/users/${username}/collection`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data.data; // successResponse returns { status, data }
  } catch (error) {
    console.error('Error fetching user collection:', error);
    throw error;
  }
};

// Add a card to the logged-in user's private collection
export const addCardToUserCollection = async (username, cardName, token, quantity = 1) => {
  try {
    const response = await axios.post(
      `${API_URL}/users/${username}/collection`,
      { cardName, quantity },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    console.error('Error adding card to user collection:', error);
    throw error;
  }
};