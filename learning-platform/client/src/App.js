/**
 * Main App component for EduCollab platform.
 */
import React from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoursesPage from ".pages/CoursesPage";
import CourseDetail from "./CourseDetail";
import ChallengesPage from "./ChallengesPage";
import "./App.css";

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
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;