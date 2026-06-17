import { useState, useEffect, useCallback } from 'react';
import { getVoteCounts, submitVote as apiSubmitVote } from '../services/api';

/**
 * Custom React Hook - Handles vote data and state management
 * This hook encapsulates all the logic for fetching and submitting votes
 */
export const useVotes = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [loveCount, setLoveCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch vote counts from Django backend
  const fetchVotes = useCallback(async () => {
    try {
      const data = await getVoteCounts();
      setLikeCount(data.like_count);
      setLoveCount(data.love_count);
    } catch (error) {
      console.error('Error fetching votes:', error);
    }
  }, []);

  // Submit a vote to Django backend and refresh counts
  const submitVote = useCallback(async (voteType) => {
    setLoading(true);
    setMessage('');
    
    try {
      await apiSubmitVote(voteType);
      setMessage('Thanks for voting!');
      // Refresh vote counts after submitting
      await fetchVotes();
    } catch (error) {
      setMessage('Could not connect to server');
    } finally {
      setLoading(false);
    }
  }, [fetchVotes]);

  // Load votes on initial render
  useEffect(() => {
    fetchVotes();
  }, [fetchVotes]);

  return {
    likeCount,
    loveCount,
    loading,
    message,
    submitVote,
    fetchVotes
  };
};