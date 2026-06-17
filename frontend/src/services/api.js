/**
 * API Service - Handles all communication with Django backend
 * This separates API logic from components for cleaner code
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// Get vote counts from the backend
export const getVoteCounts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/votes/counts/`);
    if (!response.ok) {
      throw new Error('Failed to fetch vote counts');
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Submit a new vote to the backend
export const submitVote = async (voteType) => {
  try {
    const response = await fetch(`${API_BASE_URL}/votes/create/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ vote_type: voteType })
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit vote');
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};