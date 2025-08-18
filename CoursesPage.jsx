import React, { useState } from "react";
import Quiz from "./Quiz";
import Rewards from "./Rewards";
import Challenges from "./Challenges";
import "./CoursesPage.css";

function CoursesPage() {
  // Example state for rewards and completed challenges
  const [points, setPoints] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState([]);

  // Callback when a quiz is completed
  const handleQuizComplete = () => {
    setPoints(points + 50);
  };

  const handleChallengeComplete = (id) => {
    if (!completedChallenges.includes(id)) {
      setCompletedChallenges([...completedChallenges, id]);
      setPoints(points + 30);
    }
  };

  return (
    <div className="courses-container">
      <h1>Courses</h1>
      <section>
        <h2>Interactive Course</h2>
        <Quiz onComplete={handleQuizComplete} />
      </section>
      <section>
        <h2>Rewards</h2>
        <Rewards points={points} />
      </section>
      <section>
        <h2>Challenges</h2>
        <Challenges
          completed={completedChallenges}
          onComplete={handleChallengeComplete}
        />
      </section>
    </div>
  );
}

export default CoursesPage;