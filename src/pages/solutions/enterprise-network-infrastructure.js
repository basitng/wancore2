import { WifiOutlined } from "@mui/icons-material";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { nanoid } from "nanoid";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function EnterpriseNetwoekInf() {
  const qualities = [
    {
      title:
        "Wired Data / Voice CablingWireless LAN, Wireless Campus LAN Backbone and Backhaul Solution",
      id: nanoid(),
      content: `Wancore Systems has garnered huge experience in deploying wireless solutions ranging from wireless LAN to wireless LAN bridging in campus environment and metropolitan wireless backhaul for Data, Voice and Video transmission.

      Mostly, we provide wireless LAN in areas where wired LAN is totally impossible or mobility is of high priority or as a backup to wired LAN. Also, in the campus environment where laying of Optical Fiber backbone cables is found to be very expensive to achieve or time of delivery will not allow the laying of Optical Fiber cables, we deploy wireless LAN bridging solution.

      The type and models of equipment we recommend depend on the distances between the buildings in consideration. We major in the following equipment`,
      icon: <WifiOutlined sx={{ color: "#fff" }} />,
      color: "--color-purple-dark",
      backgroundColor: "--color-purple",
    },

    {
      title: "Wired Campus Network",
      id: nanoid(),
      content: `We also design and deploy Wired Campus Network whereby each building in the campus stands as a unit but connected to the central Point (source of services like Internet Access, Business Applications etc) using Optical Fiber cable as the Backbone.

      Similar to this are multi-storey building Data/Voice Infrastructures in which each floor of the building has its wiring closet and connected to the Main Server room via Optical Fiber backbone cabling.
      
      We have trained and seasoned Optical Fiber technician that gives your Optical Fiber cables best treatment from laying/blowing to splicing with acceptable international standard in mind always.
      
      GSM and Mobile internet service providers in their plight to improve their services often result to laying Optical Fiber across the metropolis. Wancore System is well positioned to provide them consultancy services, project management services or the actual implementation of the project.`,
      icon: <WifiOutlined sx={{ color: "#fff" }} />,
      color: "--color-pink-dark",
      backgroundColor: "--color-pink",
    },
    {
      title: "Wired Data / Voice Cabling",
      id: nanoid(),
      content: `Our structured cabling system provides a universal platform upon which an overall information systems strategy is built.
        With a flexible cabling infrastructure, support for multiple voice, data, video and multimedia systems regardless of their manufacturer is achievable. Wired in a star topology, each workstation links to a central point and facilitates system interconnection and administration. This approach allows communication with virtually any device, anywhere, at any time.
        Through the years, Wancore System has gone into alliances with major global cable manufacturing companies. The business model of the company is anchored on partnering with the best-in-class global companies, for their best products and services and delivering them to our customers in the best manner, using the best people.`,
      icon: <WifiOutlined sx={{ color: "#fff" }} />,
      color: "--color-red",

      backgroundColor: "--color-red-light",
    },
  ];
  return (
    <React.Fragment>
      <Navbar color="#555" raised={2} bg={"#fff"}/>
      <Container>
        <Box
          className="place--center"
          sx={(theme) => ({
            mt: 12,

            [theme.breakpoints.down("sm")]: {
              mt: 14,
            },
          })}
        >
          <Typography variant="h6" color="GrayText">
            Solutions
          </Typography>
          <Typography variant="h3" color="GrayText">
            Enterprise Network and Infrastructure
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={(theme) => ({
            mt: 3,
            [theme.breakpoints.down("sm")]: {
              mt: 5,
            },
          })}
        >
          {qualities.map((quality) => (
            <Grid item xs={12} md={6} key={quality.id}>
              <Box
                sx={{
                  p: "50px 30px",

                  background: `var(${quality.backgroundColor})`,
                  borderRadius: 2,
                }}
              >
                <IconButton
                  size="large"
                  sx={{ background: `var(${quality.color})` }}
                >
                  {quality.icon}
                </IconButton>
                <Typography variant="h6">{quality.title}</Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 17, pt: 2 }}
                  color="GrayText"
                  lineHeight={1.6}
                >
                  {quality.content}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Footer />
      </Container>
    </React.Fragment>
  );
}
