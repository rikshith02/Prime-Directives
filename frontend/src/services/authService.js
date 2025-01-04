import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Backend base URL

export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, data);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Network error");
  }
};
