import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg" className="fade-in" sx={{ py: 6 }}>
      <Typography variant="h2" align="center" color="primary" gutterBottom>
        Welcome to EduCollab!
      </Typography>
      <Typography variant="h5" align="center" color="secondary" paragraph>
        Connect, learn, and grow together—join study groups, real-time chats,
        and collaborative challenges.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Card className="card-hover">
            <CardContent>
              <SchoolIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Interactive Courses</Typography>
              <Typography variant="body2" color="text.secondary">
                Discover curated courses and expand your skills with peers.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => navigate("/browse-courses")}
              >
                Browse Courses
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-hover">
            <CardContent>
              <GroupIcon color="secondary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6">Study Groups</Typography>
              <Typography variant="body2" color="text.secondary">
                Join real-time group discussions, code, and solve problems
                together.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="secondary"
                onClick={() => navigate("/groups")}
              >
                Find Groups
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="card-hover">
            <CardContent>
              <EmojiEventsIcon sx={{ fontSize: 40, color: "#fbc02d", mb: 1 }} />
              <Typography variant="h6">Challenges & Rewards</Typography>
              <Typography variant="body2" color="text.secondary">
                Participate in weekly challenges and earn badges for your
                achievements!
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{ color: "#fbc02d" }}
                onClick={() => navigate("/see-challenges")}
              >
                See Challenges
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Typography variant="body1" color="text.secondary">
          Ready to start?{" "}
          <Button
            variant="contained"
            color="primary"
            sx={{ ml: 1 }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </Typography>
      </Box>
    </Container>
  );
}
