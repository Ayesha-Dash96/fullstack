import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Base URL for all API calls
});

export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

