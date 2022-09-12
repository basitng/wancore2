import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import ReliableImage from "../../../assets/images/reliable.jpg";
export default function SectionTwo() {
  return (
    <Grid
      container
      spacing={5}
      sx={{ mt: 12 }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={12} md={6} sm={12}>
        <Typography
          variant="body2"
          fontWeight={"bold"}
          sx={{ color: red[600] }}
        >{`Core Values`}</Typography>
        <Typography variant="h4">Vision Statement</Typography>
        <Typography
          variant="body2"
          sx={{ mt: 2 }}
          color="GrayText"
          className="use-header-font"
        >
          To provide tailored solutions and services which: Increase
          flexibility, Decrease risk, and Enable superior performance in support
          of customer-specific business requirements.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} sm={12}>
        <img
          src={ReliableImage}
          style={{
            width: "400px",
            height: "400px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </Grid>
    </Grid>
  );
}
