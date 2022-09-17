import { WifiOutlined } from "@mui/icons-material";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { nanoid } from "nanoid";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Course() {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Box
          className="place--center"
          sx={(theme) => ({
            mt: 12,

            [theme.breakpoints.down("sm")]: {
              mt: 14,
            },
          })}
        >
          <Typography variant="h6" color="GrayText">
            Solutions
          </Typography>
          <Typography variant="h3" color="GrayText">
            Available Courses
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={(theme) => ({
            mt: 3,
            [theme.breakpoints.down("sm")]: {
              mt: 5,
            },
          })}
        >
          {qualities.map((quality) => (
            <Grid item xs={12} md={6} key={quality.id}>
              <Box
                sx={{
                  p: "50px 30px",

                  background: `var(${quality.backgroundColor})`,
                  borderRadius: 2,
                }}
              >
                <IconButton
                  size="large"
                  sx={{ background: `var(${quality.color})` }}
                >
                  {quality.icon}
                </IconButton>
                <Typography variant="h6">{quality.title}</Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 17, pt: 2 }}
                  color="GrayText"
                  lineHeight={1.6}
                >
                  {quality.content}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Footer />
      </Container>
    </React.Fragment>
  );
}
