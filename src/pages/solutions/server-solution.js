import { BusinessOutlined, NetworkCheckOutlined } from "@mui/icons-material";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { nanoid } from "nanoid";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function ServerToTheHome() {
  const qualities = [
    {
      title: `Network Infrastructure Support`,
      id: nanoid(),

      icon: <NetworkCheckOutlined sx={{ color: "#fff" }} />,
      color: "--color-purple-dark",
      backgroundColor: "--color-purple",
    },
    {
      title: `Virtualization Design`,
      id: nanoid(),

      icon: <NetworkCheckOutlined sx={{ color: "#fff" }} />,
      color: "--color-brand-facebook",

      backgroundColor: "--color-brand-facebook-light",
    },

    {
      title: "Microsoft Server Implementation",
      id: nanoid(),

      icon: <NetworkCheckOutlined sx={{ color: "#fff" }} />,
      color: "--color-red",

      backgroundColor: "--color-red-light",
    },

    {
      title: `Web Design & SharePoint Implementation.`,
      id: nanoid(),

      icon: <NetworkCheckOutlined sx={{ color: "#fff" }} />,
      color: "--color-brand-instagram",

      backgroundColor: "--color-brand-instagram-light",
    },
    {
      title: `Backup and Disaster recovery`,
      id: nanoid(),
      icon: <NetworkCheckOutlined sx={{ color: "#fff" }} />,
      color: "--color-pink-dark",
      backgroundColor: "--color-pink",
    },
    {
      title: `SQL installation and Database administration`,
      id: nanoid(),
      icon: <NetworkCheckOutlined sx={{ color: "#fff" }} />,
      color: "--color-brand-youtube",
      backgroundColor: "--color-brand-youtube-light",
    },
    {
      title: `Storage solutions`,
      id: nanoid(),
      icon: <NetworkCheckOutlined sx={{ color: "#fff" }} />,
      color: "--color-green",
      backgroundColor: "--color-green-light",
    },
    {
      title: `Environmental Monitoring System (EMS) `,
      id: nanoid(),
      icon: <NetworkCheckOutlined sx={{ color: "#fff" }} />,
      color: "--color-red",
      backgroundColor: "--color-red-light",
    },
  ];
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
            Server Solutions
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
            <Grid item xs={12} md={3} key={quality.id}>
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

                <Typography
                  variant="body2"
                  sx={{ fontSize: 17, pt: 2 }}
                  color="GrayText"
                  lineHeight={1.4}
                >
                  {quality.title}
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
