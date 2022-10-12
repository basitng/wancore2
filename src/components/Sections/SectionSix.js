import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
            sx={(theme) => ({
              maxWidth: "60%",
              mt: 2,
              [theme.breakpoints.down("sm")]: {
                maxWidth: "100%",
              },
            })}
          >
            Enrol for professional I.C.T training that includes, Software
            Development and Design, Networking, FTTH, ...
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to={`/training`}
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

// We are ICT company that creates enabling environment for smart homes (Estates, State, Big company etc.) by deploying Fiber to the Home (FTTH) technology, both inside and outside deployment….

// We build standard Data Center as central office where all equipment and service users are administer.

// Think of enjoying your zoom meeting , IPTv, Netflix, Watch matches online, connect your CCTV online , access control all can work on fiber optics at speed of light...

// We are open to business (B2B) by seeking for referrers from  estate developers, campuses, big organization with large geographical sizes, business owner who want to be ISP, ISPs etc...
