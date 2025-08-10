import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Slide,
} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useNavigate } from "react-router-dom";

const initialGroups = [
  {
    name: "Web Dev Warriors",
    description: "Frontend & Backend fun!",
    members: 12,
  },
  {
    name: "AI Pioneers",
    description: "Machine learning & data science.",
    members: 8,
  },
  {
    name: "Competitive Coders",
    description: "DSA practice and hacks.",
    members: 15,
  },
];

export default function Groups() {
  const [groups] = useState(initialGroups);
  const navigate = useNavigate();

  const handleJoin = (groupName) => {
    alert(`You joined ${groupName}!`);
    // navigate(`/groups/${groupName}`); // If you make a details page
  };

  return (
    <Container maxWidth="md" className="fade-in" sx={{ py: 5 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Study Groups
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Click on a group to join and start collaborating in real-time!
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <List>
          {groups.map((group, i) => (
            <Slide
              key={group.name}
              direction="up"
              in={true}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <ListItem
                secondaryAction={
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => handleJoin(group.name)}
                  >
                    Join
                  </Button>
                }
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  boxShadow: "0 2px 12px #e3f2fd",
                  transition: "0.3s",
                  "&:hover": { boxShadow: "0 4px 32px #bbdefb" },
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#1976d2" }}>
                    <GroupAddIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={group.name}
                  secondary={`${group.description} — ${group.members} members`}
                />
              </ListItem>
            </Slide>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
