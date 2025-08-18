import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";

const courses = [
  { id: 1, title: "React Basics", description: "Learn fundamentals of React." },
  { id: 2, title: "Node.js Mastery", description: "Backend with Node.js and Express." },
  { id: 3, title: "Firebase Essentials", description: "Realtime apps with Firebase." },
  { id: 4, title: "Socket.io Real-time", description: "Build live apps using Socket.io." },
  { id: 5, title: "MongoDB Crash Course", description: "Understand NoSQL and build with MongoDB." },
  { id: 6, title: "Full-Stack MERN", description: "Combine MongoDB, Express, React, and Node.js." },
  { id: 7, title: "JavaScript ES6+", description: "Master modern JavaScript features and syntax." },
  { id: 8, title: "TypeScript for Beginners", description: "Add static typing to JavaScript apps." },
  { id: 9, title: "Git & GitHub Workflow", description: "Version control and collaboration made easy." },
  { id: 10, title: "UI/UX Fundamentals", description: "Learn design principles and create engaging UIs." },
  { id: 11, title: "Python for Web Development", description: "Use Flask and Django to build web apps." },
  { id: 12, title: "Cloud with AWS Basics", description: "Deploy and manage apps on AWS." },
];

function BrowseCourses() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" align="center" color="primary" gutterBottom>
        Browse Courses
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Explore curated learning paths to level up your skills 🚀
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card className="card-hover" sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <SchoolIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  sx={{
                    textTransform: "none",
                    fontWeight: "bold",
                    color: "primary.main",
                    borderRadius: "20px",
                    px: 2,
                    py: 0.5,
                    backgroundColor: "#fff",
                    boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
                    "&:hover": {
                      backgroundColor: "primary.light",
                      color: "#fff",
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                    },
                  }}
                  onClick={() => navigate(`/courses/${course.id}`)}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default BrowseCourses;
