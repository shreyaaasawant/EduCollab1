import React from "react";

const challenges = [
  { id: 1, text: "Build a React Counter" },
  { id: 2, text: "Create a ToDo List App" },
  { id: 3, text: "Make a Quiz Component" },
];

function Challenges({ completed, onComplete }) {
  return (
    <div className="challenges-card">
      <ul>
        {challenges.map((c) => (
          <li key={c.id}>
            <span>{c.text}</span>
            {completed.includes(c.id) ? (
              <span className="completed">✅ Completed</span>
            ) : (
              <button onClick={() => onComplete(c.id)}>Mark as Done</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Challenges;