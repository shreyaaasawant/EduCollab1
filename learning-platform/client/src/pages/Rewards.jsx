import React from "react";

function Rewards({ points }) {
  return (
    <div className="rewards-card">
      <p>You have {points} points.</p>
      {points >= 50 && <div className="badge">🏅 React Beginner Badge!</div>}
      {points >= 150 && <div className="badge">🥇 React Pro Badge!</div>}
      {points >= 300 && <div className="badge">🏆 Master Coder!</div>}
    </div>
  );
}

export default Rewards;