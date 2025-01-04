import axios from "axios";

// Base API URL for authentication routes
const API_URL = "http://localhost:5000/api/auth";

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data; // Return response data (success message)
  } catch (error) {
    throw new Error("Signup failed: " + error.message); // Handle signup failure
  }
};

// Log in a user
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const { token, message, user } = response.data;

    // Store user role and token in localStorage for future use
    localStorage.setItem('user', JSON.stringify({ ...user, token }));

    // Return the response message and user data
    return { message, user };
  } catch (error) {
    throw new Error("Login failed: " + error.message); // Handle login failure
  }
};

// Get the role of the user from localStorage
export const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem('user')); // Get the user object from localStorage
  return user ? user.role : null; // Return the user's role if available
};

// Log out the user by clearing localStorage
export const logoutUser = () => {
  localStorage.removeItem('user'); // Remove user data from localStorage
};
