import React from "react";
import wancoreTeam from "../../../assets/images/img5.jpeg";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function SectionFour() {
  return (
    <Box className="gradient-bg" sx={{ mt: 15, p: "100px 0px" }}>
      <Container>
        <Grid
          container
          justifyContent="space-around"
          spacing={10}
          alignItems="center"
        >
          <Grid item xs={12} md={6} sm={12}>
            <img src={wancoreTeam} className="wancore--img" />
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <Typography variant="body2" className="use-header-font">
              About us
            </Typography>
            <Typography variant="h3" className="use-header-font">
              Wancore Sytems
            </Typography>
            <Typography
              className="use-header-font"
              variant="body1"
              sx={{ fontSize: "17px", mt: 2 }}
            >
              Wancore Systems Limited is a leading firm in providing Information
              and Communications Technology solutions (ICT). Offering dynamic
              services and specialized support, we are committed to providing
              comprehensive solutions and services to mid-market businesses and
              focused strategic consulting services to enterprise businesses.
            </Typography>
            <Button
              variant="contained"
              className="use-header-font"
              sx={{ mt: 3 }}
              disableElevation
              size="large"
              component={Link}
              to={`/projects`}
            >
              view projects
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
