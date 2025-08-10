import React, { useState } from "react";

function Quiz({ onComplete }) {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === "react") {
      setFeedback("Correct! 🎉");
      setCompleted(true);
      if (onComplete) onComplete();
    } else {
      setFeedback("Try again!");
    }
  };

  return (
    <div className="quiz-card">
      <form onSubmit={handleSubmit}>
        <label>
          What is the main library for building user interfaces in JavaScript?
        </label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={completed}
        />
        <button type="submit" disabled={completed}>
          Submit
        </button>
      </form>
      {feedback && <div className="quiz-feedback">{feedback}</div>}
    </div>
  );
}

export default Quiz;