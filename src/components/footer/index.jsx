import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import Bg from "../../lottie/91471-mobile-app-process.json";

import { FooterContainer, LinkWrapper } from "./Footer.styled";

export default function _Footer() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Bg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <FooterContainer>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6}>
            <div className="phone">
              <Lottie
                options={defaultOptions}
                height={"60vh"}
                width={"100%"}
                isStopped={false}
                isPaused={false}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" className="responsive--text">
              Try our service today! and recieve a{" "}
              <span className="color-base">satisfactory reply</span>
            </Typography>
          </Grid>
        </Grid>
      </FooterContainer>
      <Grid container spacing={2} className="responsive--footer">
        <Grid item xs={12} md={4}>
          <Typography variant="h3">
            Wancore<span className="color-base"> Systems</span>
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="h6">Services</Typography>
          <ul>
            <Link to="services">
              <Typography variant="body1" color="GrayText">
                Server solutions
              </Typography>
            </Link>
            <Link to="services">
              <Typography variant="body1" color="GrayText">
                Data Centre
              </Typography>
            </Link>
            <Link to="services">
              <Typography variant="body1" color="GrayText">
                Safety solutions
              </Typography>
            </Link>
            <Link to="services">
              <Typography variant="body1" color="GrayText">
                Web development
              </Typography>
            </Link>
          </ul>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="h6">About Us</Typography>
          <ul>
            <Link to="about">
              <Typography variant="body1" color="GrayText">
                Our Company
              </Typography>
            </Link>
            <Link to="about">
              <Typography variant="body1" color="GrayText">
                Our vision
              </Typography>
            </Link>
            <a href="tel:+234-8033935916">
              <Typography variant="body1" color="GrayText">
                Contact Us
              </Typography>
            </a>
            <Link to="about">
              <Typography variant="body1" color="GrayText">
                Others
              </Typography>
            </Link>
          </ul>
        </Grid>
      </Grid>
    </>
  );
}
