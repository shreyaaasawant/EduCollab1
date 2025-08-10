import React from "react";
import {
  Container,
  Paper,
  Typography,
  Avatar,
  Box,
  Chip,
  Button,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm" className="fade-in" sx={{ py: 5 }}>
      <Paper elevation={4} sx={{ p: 4, textAlign: "center", borderRadius: 4 }}>
        <Avatar
          src="https://randomuser.me/api/portraits/men/31.jpg"
          sx={{ width: 100, height: 100, mx: "auto" }}
        />
        <Typography variant="h5" sx={{ mt: 2, fontWeight: 700 }}>
          Shreya Sawant
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Full Stack Developer | Machine Learning Enthusiast
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Chip
            icon={<EmojiEventsIcon />}
            label="Top Contributor"
            color="warning"
            sx={{ mr: 1 }}
          />
          <Chip label="React Expert" color="primary" sx={{ mr: 1 }} />
          <Chip label="DSA Champion" color="secondary" />
        </Box>
        <Button
          variant="outlined"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => navigate("/edit-profile")}
        >
          Edit Profile
        </Button>
      </Paper>
    </Container>
  );
}
