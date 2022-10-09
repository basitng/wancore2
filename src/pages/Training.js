import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../components/Navbar";

export default function Training() {
  return (
    <React.Fragment>
      <Navbar color="white" raised={0} bg="transparent" />
      <Grid
        container
        justifyContent={"center"}
        alignItems="center"
        // spacing={5}
        sx={(theme) => ({
          width: "100%",
          height: "100vh",
          padding: "100px 130px",
          background: "linear-gradient(to left, #042b59, #043875,#041e3c)",
          [theme.breakpoints.down("sm")]: {
            padding: "150px 10px",
          },
        })}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={(theme) => ({
              marginRight: 3,
              [theme.breakpoints.down("sm")]: {
                marginRight: 0,
              },
            })}
          >
            <Typography
              variant="h4"
              sx={(theme) => ({
                fontSize: 40,
                [theme.breakpoints.down("sm")]: { fontSize: 25 },
              })}
              color="white"
              textTransform={"capitalize"}
            >
              Become an expert in programming By Subscribing to{" "}
              <span>Ajaga Abdul Basit</span>
            </Typography>
            <Typography
              variant="body2"
              color="whitesmoke"
              sx={{ m: "10px 0px" }}
            >
              Follow Mr. Code Matrix Channel today, to become an expert in
              programming with{" "}
              <span className="training-span">
                {" "}
                JavaScript, Typescript, C#, Dart, C++, Java, Kotlin and Swift UI
              </span>
            </Typography>
            <Button
              className="btn--extended animated-btn"
              sx={{ marginTop: 1 }}
              size="large"
              variant="contained"
            >
              Enroll Now for free
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <iframe
              width="100%"
              height="315"
              style={{ borderRadius: 10 }}
              src="https://www.youtube.com/embed/HQKfTzZ0b9c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
