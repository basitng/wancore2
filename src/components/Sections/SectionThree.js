import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import ReliableImage from "../../assets/images/reliable.jpg";
export default function SectionThree() {
  return (
    <Grid container spacing={2} sx={{ mt: 12 }} alignItems="center">
      <Grid item xs={12} md={6} sm={12}>
        <Typography
          variant="body2"
          fontWeight={"bold"}
          sx={{ color: red[600] }}
        >{`Stable & Reliable`}</Typography>
        <Typography variant="h4">Trusted by many</Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Wancore System is supported and used by well-known brands around
          Nigeria, and maintain by a team of multi talented individuals
        </Typography>
        <Button variant="outlined" size="large" sx={{ mt: 2 }}>
          Explore the ecosystem
        </Button>
      </Grid>
      <Grid item xs={12} md={6} sm={12}>
        <img src={ReliableImage} style={{ width: "100%", borderRadius: 10 }} />
      </Grid>
    </Grid>
  );
}
