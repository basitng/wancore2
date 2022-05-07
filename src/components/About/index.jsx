import {
  PauseCircleFilledOutlined,
  PlayCircleFilledOutlined,
} from "@mui/icons-material";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import Lottie from "react-lottie";
import Cloud from "../../lottie/97686-cloud-animation.json";
import Indicator from "../indicator";
import { AboutContainer, HeadingText, Tracker } from "./About.styled";

export default function _About() {
  const [play, setPlay] = useState(false);
  const [pause, setPause] = useState(false);

  const playAnimation = () => {
    setPlay(true);
  };
  const pauseAnimation = () => {
    setPause(true);
  };
  const defaultOptions = {
    loop: true,
    autoplay: play,
    animationData: Cloud,
    play,
    pause,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <AboutContainer>
      <Grid container justifyContent={"center"} alignItems="center">
        <Grid item xs={12} md={6}>
          <HeadingText>ABOUT US</HeadingText>
          <Typography
            variant="body1"
            color="GrayText"
            sx={{ fontSize: "1.2rem", lineHeight: "2.5rem" }}
          >
            Wancore Systems Limited, a leading firm in providing Information and
            Communications Technology solutions (ICT). Offering dynamic services
            and specialized support, we are committed to providing comprehensive
            solutions and services to mid-market businesses and focused
            strategic consulting services to enterprise businesses. We deploys
            state-of-the-art Information, Communication, Telecommunication and
            power services to individuals, corporate organizations, Agencies,
            Financial Institutions, oil & gas sector, manufacturing sector and
            Academic Institutions around Nigeria and West-Africa Sub-region.
            However, we help dynamic organizations align their IT services with
            their business requirements.
          </Typography>
          <Tracker>
            <Tooltip title="Pause Animation">
              <IconButton size="small" onClick={pauseAnimation}>
                <PauseCircleFilledOutlined sx={{ color: "var(--text2)" }} />
              </IconButton>
            </Tooltip>
            <div />
            <div />
            <div />
            <div />
            <Tooltip title="Play Animation">
              <IconButton size="small" onClick={playAnimation}>
                <PlayCircleFilledOutlined sx={{ color: "var(--text2)" }} />
              </IconButton>
            </Tooltip>
          </Tracker>
        </Grid>
        <Grid item xs={12} md={6}>
          <Lottie
            options={defaultOptions}
            height={"100%"}
            width={"100%"}
            isPaused={pause}
            isClickToPauseDisabled
          />
        </Grid>
      </Grid>
      <Indicator mode="light" number={"02"} />
    </AboutContainer>
  );
}
