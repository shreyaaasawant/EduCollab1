import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{ background: "linear-gradient(90deg,#1976d2 60%,#ff9800 100%)" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "#fff",
            fontWeight: 700,
            letterSpacing: 1.5,
          }}
        >
          EduCollab
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/courses">
            Courses
          </Button>
          <Button color="inherit" component={Link} to="/groups">
            Groups
          </Button>
          <Button color="inherit" component={Link} to="/profile">
            Profile
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
