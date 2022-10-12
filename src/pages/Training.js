import { Button, Chip, Grid, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
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
              A very basic introduction to programming by Mr. Code Matrix
            </Typography>
            <Typography
              variant="body2"
              color="whitesmoke"
              sx={{ m: "10px 0px" }}
            >
              We train organizations and enterprise on software development to
              an expert level.{" "}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {" "}
                <Chip
                  sx={{ backgroundColor: orange[800], m: 0.3, color: "white" }}
                  label={"JavaScript"}
                />
                <Chip
                  sx={{ backgroundColor: orange[800], m: 0.3, color: "white" }}
                  label={"Typescript"}
                />
                <Chip
                  sx={{ backgroundColor: orange[800], m: 0.3, color: "white" }}
                  label={"C#"}
                />
                <Chip
                  sx={{ backgroundColor: orange[800], m: 0.3, color: "white" }}
                  label={"Dart"}
                />
                <Chip
                  sx={{ backgroundColor: orange[800], m: 0.3, color: "white" }}
                  label={"C++"}
                />
                <Chip
                  sx={{ backgroundColor: orange[800], m: 0.3, color: "white" }}
                  label={"Java"}
                />
                <Chip
                  sx={{ backgroundColor: orange[800], m: 0.3, color: "white" }}
                  label={"Kotlin"}
                />
                <Chip
                  sx={{ backgroundColor: orange[800], m: 0.3, color: "white" }}
                  label={"Swift UI"}
                />
              </Box>
            </Typography>
            <a
              target="_blank"
              rel="noopener"
              aria-label="Github"
              href="https://www.youtube.com/channel/UCzaLdWRGDkKSeZ9dtOvusVQ"
            >
              <Button
                className="btn--extended animated-btn"
                sx={{ marginTop: 1 }}
                size="large"
                variant="contained"
              >
                Enroll Now
              </Button>
            </a>
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
