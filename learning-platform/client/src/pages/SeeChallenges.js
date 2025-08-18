import React, { useState } from "react";
import { Container, Typography, Grid, Card, CardContent, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

const SeeChallenges = () => {
  const challenges = [
    { id: 1, title: "30 Days of JavaScript", description: "Complete one JS project daily." },
    { id: 2, title: "React UI Challenge", description: "Build 5 UI components in a week." },
    { id: 3, title: "Data Structures Marathon", description: "Solve 50 DSA problems in a month." }
  ];

  // State for popup
  const [open, setOpen] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const handleParticipate = (challenge) => {
    setSelectedChallenge(challenge);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedChallenge(null);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        See Challenges
      </Typography>
      <Grid container spacing={3}>
        {challenges.map((challenge) => (
          <Grid item xs={12} sm={6} md={4} key={challenge.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{challenge.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {challenge.description}
                </Typography>
              </CardContent>
              <Button
                size="small"
                sx={{ m: 1 }}
                variant="outlined"
                onClick={() => handleParticipate(challenge)}
              >
                Participate
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Popup/Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Participation Confirmed</DialogTitle>
        <DialogContent>
          <Typography>
            You have participated in <strong>{selectedChallenge?.title}</strong>!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SeeChallenges;