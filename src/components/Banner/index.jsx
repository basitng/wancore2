import React, { useEffect, useRef, useState } from "react";

import { Banner, Caption } from "./Banner.styled";
import Lottie from "react-lottie";
import Bg from "../../lottie/97938-background.json";
import { Button } from "@mui/material";
import { PlayCircle, Work } from "@mui/icons-material";
import Indicator from "../indicator";

export default function _Banner() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Bg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div style={{ position: "relative" }}>
      <Lottie
        options={defaultOptions}
        height={"100vh"}
        width={"100%"}
        isStopped={false}
        isPaused={false}
      />
      <Caption>
        <h1>We are Wancore Systems</h1>
        <h4>A world class tech company leading in it services</h4>
        <div>
          <Button
            variant="contained"
            size="large"
            sx={{ borderRadius: 48, width: 200, height: 60 }}
            endIcon={<PlayCircle />}
          >
            Get Started
          </Button>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            sx={{ borderRadius: 48, width: 200, height: 60, marginLeft: 1 }}
            endIcon={<Work />}
          >
            Hire Us
          </Button>
        </div>
      </Caption>
      <Indicator mode="dark" number={"01"} />
    </div>
  );
}
