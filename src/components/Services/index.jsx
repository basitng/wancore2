import React from "react";
import Img from "react-optimized-image";
import {
  BossMan,
  Gafar,
  HeaderContainer,
  ServiceCard,
  ServiceCardImageWrapper,
  ServicesContainer,
} from "./Services.styled";

import Account from "../../assets/images/acc.jpg";
import Camera from "../../assets/images/camera.jpg";
import Tracking from "../../assets/images/track.jpg";
import WireConnection from "../../assets/images/connect-wire.jpg";
import Web from "../../assets/images/web.jpg";
import Server from "../../assets/images/server.jpg";
import Indicator from "../indicator";
import { Grid, IconButton, Typography } from "@mui/material";
import { ArrowForwardIosOutlined } from "@mui/icons-material";

export default function _Services() {
  const Services = [
    {
      title: "Data Centre Development",
      id: Math.PI * Math.random(1000),
      media: WireConnection,
    },
    {
      title: "Server Solutions",
      id: Math.PI * Math.random(1000),
      media: Server,
    },
    {
      title: "Security and Context-based Safety Solutions",
      id: Math.PI * Math.random(1000),
      media: Camera,
    },
    {
      title: "Accounting Business Solutions",
      id: Math.PI * Math.random(1000),
      media: Account,
    },
    {
      title: "Enterprise RFID tracking solution",
      id: Math.PI * Math.random(1000),
      media: Tracking,
    },
    {
      title: "Web & Mobile App Development",
      id: Math.PI * Math.random(1000),
      media: Web,
    },
  ];
  return (
    <ServicesContainer>
      <HeaderContainer>
        <h1>Services</h1>
        <Typography variant="body1">
          We offer high fidelity services that match with world-class standard
          with the best of it technologies, no wonder we are recognized globally
          for it services, we offer.
        </Typography>
      </HeaderContainer>
      <BossMan>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems={"center"}
        >
          {Services.map((item) => (
            <Grid item x={12} md={6} key={item.id}>
              <ServiceCard>
                <ServiceCardImageWrapper>
                  <img src={item.media} />
                </ServiceCardImageWrapper>
                <h1>{item.title}</h1>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </BossMan>
      <br />
      <br />
      <Indicator mode="light" number={"03"} />
    </ServicesContainer>
  );
}
