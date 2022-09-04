import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { indigo, red } from "@mui/material/colors";
import BusinessImage from "../../assets/images/happy-experience.jpg";
export default function SectionFive() {
  return (
    <Grid container spacing={2} sx={{ mt: 12 }} alignItems="center">
      <Grid item xs={12} md={6} sm={12}>
        <Typography
          variant="body2"
          fontWeight={"bold"}
          sx={{ color: indigo[600] }}
        >{`Customer Experience`}</Typography>
        <Typography variant="h4">Transform your workflow</Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Take control of your business and grow your brand with the help of
          rich customer experience brought to you by Wancore Systems
        </Typography>
        <Button variant="outlined" size="large" sx={{ mt: 2 }}>
          Explore Wancore systems
        </Button>
      </Grid>
      <Grid item xs={12} md={6} sm={12}>
        <img src={BusinessImage} style={{ width: "100%", borderRadius: 10 }} />
      </Grid>
    </Grid>
  );
}
