import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import BusinessImage from "../../../assets/images/business-technology.jpg";
export default function SectionThree() {
  return (
    <Grid container spacing={2} sx={{ mt: 12 }} alignItems="center">
      <Grid item xs={12} md={6} sm={12}>
        <img
          src={BusinessImage}
          style={{
            borderRadius: "50%",
            width: "400px",
            height: "400px",
            objectFit: "cover",
          }}
        />
      </Grid>
      <Grid item xs={12} md={6} sm={12}>
        <Typography
          variant="body2"
          fontWeight={"bold"}
          sx={{ color: green[600] }}
        >{`Core Values`}</Typography>
        <Typography variant="h4">Mission Statement</Typography>
        <Typography
          variant="body2"
          sx={{ mt: 2 }}
          className="use-header-font"
          color="GrayText"
        >
          To achieve: Operational perfection, Engineering excellence, and
          Process effectiveness that enable intimate customer and supplier
          partnerships.
        </Typography>
      </Grid>
    </Grid>
  );
}
