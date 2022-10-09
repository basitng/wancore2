import { Box, Container, Grid, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import React from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import gallery from "./global";

export default function Projects() {
  return (
    <React.Fragment>
      <Navbar color="#555" raised={2} bg={"#fff"} />
      <Container
        sx={(theme) => ({
          p: "100px 100px",
          [theme.breakpoints.down("sm")]: {
            p: "100px 10px",
          },
        })}
      >
        <Box
          className="place--center"
          sx={(theme) => ({
            mt: 5,
            mb: 5,
            [theme.breakpoints.down("sm")]: {
              mt: 6,
            },
          })}
        >
          <Typography variant="h6" color="GrayText">
            Some of our Projects
          </Typography>
          <Typography variant="h3" color="GrayText">
            Wancore Gallery
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {gallery.map((project) => (
            <Grid item xs={12} md={4}>
              <Gallery
                key={project.id}
                location={project.location}
                img={project.imageUrl}
                caption={project.caption}
                company={project.company}
                month={project.month}
                year={project.year}
              />
            </Grid>
          ))}
        </Grid>
        <Footer />
      </Container>
    </React.Fragment>
  );
}
