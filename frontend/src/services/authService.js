import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Make sure to change to your actual backend URL

// Register user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data; // Return response message
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data; // Return response message and token
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
