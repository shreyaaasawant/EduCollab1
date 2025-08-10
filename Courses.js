import React from "react";
import { Container, Typography } from "@mui/material";

export default function Courses() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Courses Coming Soon!
      </Typography>
      <Typography>
        Here you'll find all the interactive courses & learning paths.
      </Typography>
    </Container>
  );
}