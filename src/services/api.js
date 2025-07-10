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