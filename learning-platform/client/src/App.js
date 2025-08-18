/**
 * Main App component for EduCollab platform.
 */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Courses from "./pages/Courses";
import Challenges from "./pages/Challenges";
import EditProfile from "./pages/EditProfile";
import NotFound from "./pages/NotFound";
import BrowseCourses from "./pages/BrowseCourses"; // new page
import SeeChallenges from "./pages/SeeChallenges"; // new page
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/browse-courses" element={<BrowseCourses />} /> {/* new */}
         <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/see-challenges" element={<SeeChallenges />} /> {/* new */}
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
