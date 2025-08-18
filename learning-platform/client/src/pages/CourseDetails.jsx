import { useParams } from "react-router-dom";

const courses = [
  { id: 1, title: "React Basics", description: "Learn fundamentals of React." },
  { id: 2, title: "Node.js Mastery", description: "Backend with Node.js and Express." },
  { id: 3, title: "Firebase Essentials", description: "Realtime apps with Firebase." },
  { id: 4, title: "Socket.io Real-time", description: "Build live apps using Socket.io." },
  // Add more courses here
];

function CourseDetails() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === Number(courseId));

  if (!course) return <div>Course not found.</div>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      {/* Add more details if needed */}
    </div>
  );
}

export default CourseDetails;