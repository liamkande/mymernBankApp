import axios from 'axios'

const API_URL = '/api/users'

// Register a new user
const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    const user = response.data;

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }

    return user;
  } catch (error) {
    throw error;
  }
}


// Log in an existing user
const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials)

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
  } catch (error) {
    throw error // Rethrow the error to handle it in your Redux action or component
  }
}

const authService = {
  register,
  login,
}

export default authService
