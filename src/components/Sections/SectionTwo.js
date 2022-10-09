import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { nanoid } from "nanoid";
import NetworkImage from "../../assets/images/network.jpg";
import ServerImage from "../../assets/images/server.jpg";
import SoftwareImage from "../../assets/images/business-technology-2.jpg";
import TrackImage from "../../assets/images/track.jpg";
import SmartHomeImage from "../../assets/images/smart-home.jpg";
export default function SectionTwo() {
  const services = [
    {
      title: "Enterprise Network Infrastructure",
      id: nanoid(),
      image: NetworkImage,
      content:
        "We design, build and support tailored Network infrastructure irrespective of the medium, environment, users and application that is made for your business and built for your operation functionality and efficiency...",
    },
    {
      title: "World Class Data Center Infrastructure",
      id: nanoid(),
      image: ServerImage,
      content:
        "The data center is the single most critical physical infrastructure within today’s IT environments. Without the ability to process data and distribute it to the individuals that need it, companies will quickly shut…",
    },
    {
      title: "Enterprise Business App & Software Development",
      id: nanoid(),
      image: SoftwareImage,
      content:
        "Wancore Systems leverages its consulting team’s expertise in custom application design, development and integration services to provide our clients with the most…",
    },
    {
      title: "Enterprise Security Solutions",
      id: nanoid(),
      image: TrackImage,
      content:
        "We are able to support you through the process of managing your ICT security risks from conception to implementation and beyond. TigerLogic prefers to take a consultative, client specific approach which enables us to deliver tailored, customized solutions that facilitate…",
    },
    {
      title: "Enterprise Power Solution",
      id: nanoid(),
      image: SmartHomeImage,
      content:
        "We have experienced Power Protection specialists that design and deploy state-of-the-art Raw Power and Power Protection (clean Power) Cabling Solution as required or as specified by our clients and in line with our standard/recommendations.",
    },
  ];
  return (
    <Grid container spacing={2}>
      {services.map(({ title, content, id, image }) => (
        <Grid key={id} item xs={12} md={4} sm={6}>
          <Card variant="outlined">
            <CardMedia image={image} sx={{ height: "40vh" }} />
            <CardHeader
              title={
                <Typography sx={{ lineHeight: "37px" }} variant="h6">
                  {title}
                </Typography>
              }
            />
            <CardContent sx={{ mt: "-1.5rem" }}>
              <Typography variant={"body1"}>{content}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
