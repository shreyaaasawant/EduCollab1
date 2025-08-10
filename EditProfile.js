import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

export default function EditProfile() {
  const [form, setForm] = useState({
    name: "Shreya Sawant",
    bio: "Full Stack Developer | Machine Learning Enthusiast",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated!");
  };

  return (
    <Container maxWidth="sm" className="fade-in" sx={{ py: 6 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h4" color="primary" align="center" gutterBottom>
          Edit Profile
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Bio"
            name="bio"
            value={form.bio}
            onChange={handleChange}
            required
            multiline
            rows={3}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Save Changes
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
