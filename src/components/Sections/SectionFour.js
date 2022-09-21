import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import BusinessImage from "../../assets/images/business-technology.jpg";
import { Link } from "react-router-dom";
export default function SectionFour() {
  return (
    <Grid container spacing={2} sx={{ mt: 12 }} alignItems="center">
      <Grid item xs={12} md={6} sm={12}>
        <img src={BusinessImage} style={{ width: "100%", borderRadius: 10 }} />
      </Grid>
      <Grid item xs={12} md={6} sm={12}>
        <Typography
          variant="body2"
          fontWeight={"bold"}
          sx={{ color: green[600] }}
        >{`Ever-Green Always`}</Typography>
        <Typography variant="h4">Reach users, serve users</Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Wancore System deploy quality solutions that solve all her clients
          need by using the most eficient technology to resolve their various
          issues.
        </Typography>
        <Button
          component={Link}
          to={`/about`}
          variant="outlined"
          size="large"
          sx={{ mt: 2 }}
        >
          Explore brands
        </Button>
      </Grid>
    </Grid>
  );
}
