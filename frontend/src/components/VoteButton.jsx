import React from 'react';

/**
 * VoteButton Component - A reusable button for voting
 * 
 * Props:
 * - voteType: 'like' or 'love'
 * - onClick: function to handle click
 * - count: current vote count
 * - disabled: whether button is disabled
 */
const VoteButton = ({ voteType, onClick, count, disabled }) => {
  // Determine button styling based on vote type
  const buttonClass = voteType === 'like' ? 'vote-btn like-btn' : 'vote-btn love-btn';
  
  // Button emoji and text
  const emoji = voteType === 'like' ? '👍' : '❤️';
  const text = voteType === 'like' ? 'I like it' : 'I love it';

  return (
    <button
      className={buttonClass}
      onClick={() => onClick(voteType)}
      disabled={disabled}
    >
      {emoji} {text} ({count})
    </button>
  );
};

export default VoteButton;