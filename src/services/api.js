import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cards'; 

export const searchCards = async (searchTerm) => {
  try {
    const response = await axios.get(`${API_URL}/search/${searchTerm}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
};

export const addCardToCollection = async (cardName) => {
  try {
    const response = await axios.post(`${API_URL}/scryfall/name/${cardName}`);
    return response.data;
  } catch (error) {
    console.error('Error adding card to collection:', error);
    throw error;
  }
};

export const fetchRandomCard = async () => {
  try {
    const response = await axios.get(`${API_URL}/random`);
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
      `${API_URL.replace('/cards', '')}/users/register`,
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
      `${API_URL.replace('/cards', '')}/auth/login`,
      { username, password }
    );
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};