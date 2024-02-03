import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>There is no feedback</p>
      ) : (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive Feedback Percentage: {positivePercentage.toFixed(2)}%</p>
        </>
      )}
    </div>
  );
};

export default Statistics;
