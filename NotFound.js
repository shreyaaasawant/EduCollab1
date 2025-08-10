import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container className="fade-in" sx={{ py: 10, textAlign: "center" }}>
      <Typography variant="h3" color="error" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Oops! The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Go Home
      </Button>
    </Container>
  );
}