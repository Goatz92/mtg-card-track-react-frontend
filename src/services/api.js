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