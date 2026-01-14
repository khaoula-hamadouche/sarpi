// src/services/api.js
const API_URL = "http://127.0.0.1:8000";

export const getServices = async () => {
  try {
    const res = await fetch(`${API_URL}/services`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    return await res.json();
  } catch (error) {
    console.error('Erreur API:', error);
    throw error;
  }
};