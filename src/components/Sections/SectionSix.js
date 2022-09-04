import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

export default function SectionSix() {
  return (
    <Grid
      container
      sx={{ mt: 12 }}
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} md={12} sm={12}>
        <Box className="enrolment--card">
          <Typography variant="h3" color="white">
            Get Started
          </Typography>
          <Typography
            variant="body2"
            color="white"
            sx={{ maxWidth: "60%", mt: 2 }}
          >
            Enroll for professional I.C.T training that includes, Software
            Development and Design, Networking, etc.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              width: "200px",
              mt: 2,
              background: "white",
              color: "#1976d2",
            }}
          >
            Enroll now
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
