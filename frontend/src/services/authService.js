import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Register a new user
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

// Log in a user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('/api/auth/login', { email, password });
    const { token, message, user } = response.data;

    // Store user role and token in localStorage
    localStorage.setItem('user', JSON.stringify({ ...user, token }));

    return { message, user };  // Return the response data to the frontend
  } catch (error) {
    throw new Error("Login failed: " + error.message);
  }
};

// Get the role of the user from localStorage
export const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem('user')); // Get the user object from localStorage
  return user ? user.role : null;  // Return the user's role if available
};
