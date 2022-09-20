import React from "react";
import AvatarSvg from "../../../assets/images/avatar.svg";
import BgIllustration from "../../../assets/images/Bg illustration.svg";
import { Grid, Typography } from "@mui/material";

export default function SectionOne() {
  return (
    <Grid
      container
      className="about--container"
      spacing={2}
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        item
        xs={12}
        md={7}
        sm={12}
        sx={(theme) => ({
          marginTop: "80px",
          [theme.breakpoints.down("sm")]: {
            marginTop: "60px",
          },
        })}
      >
        <Typography variant="h2" fontWeight="bold">
          A strong ecosystem, powered by wancore systems
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sm={12}
        sx={(theme) => ({
          marginTop: "80px",
          [theme.breakpoints.down("sm")]: {
            marginTop: "40px",
          },
        })}
      >
        <img src={AvatarSvg} style={{ width: 450 }} className="hidden--image" />
      </Grid>
      <Grid item xs={12} md={12} sm={12}>
        <Typography
          variant="h5"
          sx={(theme) => ({
            p: "150px 100px",
            [theme.breakpoints.down("sm")]: {
              p: "10px",
              fontSize: "23px",
            },
          })}
          align="center"
        >
          From providing of great products to customers, Wancore system is
          always available for you anytime any day.
        </Typography>
      </Grid>
    </Grid>
  );
}
