import React from 'react';

/**
 * Results Component - Displays vote statistics
 * 
 * Props:
 * - likeCount: number of likes
 * - loveCount: number of loves
 */
const Results = ({ likeCount, loveCount }) => {
  const total = likeCount + loveCount;
  
  // Calculate percentages
  const likePercent = total > 0 ? Math.round((likeCount / total) * 100) : 0;
  const lovePercent = total > 0 ? Math.round((loveCount / total) * 100) : 0;

  return (
    <div className="results-container">
      <h2>Results</h2>
      <p>Total votes: {total}</p>
      
      <div className="result-bar">
        <div className="bar-label">
          <span>👍 Like: {likeCount} ({likePercent}%)</span>
        </div>
        <div className="bar-container">
          <div 
            className="bar like-bar" 
            style={{ width: `${likePercent}%` }}
          ></div>
        </div>
      </div>
      
      <div className="result-bar">
        <div className="bar-label">
          <span>❤️ Love: {loveCount} ({lovePercent}%)</span>
        </div>
        <div className="bar-container">
          <div 
            className="bar love-bar" 
            style={{ width: `${lovePercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Results;