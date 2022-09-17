import {
  BusinessOutlined,
  PhoneOutlined,
  WifiOutlined,
} from "@mui/icons-material";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { nanoid } from "nanoid";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function EnterpriseBusinessSol() {
  const qualities = [
    {
      title: `Automation of account department processes using SAGE ERP:
      With aid of SAGE ERP its seamlessly integrates and give business-wide visibility over financial, operational, sales, and customer service departments, with customized dashboards, reporting, and business intelligence options`,
      id: nanoid(),

      icon: <BusinessOutlined sx={{ color: "#fff" }} />,
      color: "--color-purple-dark",
      backgroundColor: "--color-purple",
    },
    {
      title: `⦁	Financials for Office 365 is more than just accounting software. It's your complete business solution in the cloud. With integration to the Microsoft Office applications you know and use, Financials for Office 365 is familiar and simple-to-use for small and growing businesses at a truly affordable price.
        `,
      id: nanoid(),

      icon: <BusinessOutlined sx={{ color: "#fff" }} />,
      color: "--color-brand-facebook",

      backgroundColor: "--color-brand-facebook-light",
    },

    {
      title:
        "⦁SAGE 300 People (HR and payroll solutions): comprises an agile, innovative and cost-effective HR solution that effortlessly and powerfully processes HR and payroll functions in your business",
      id: nanoid(),

      icon: <BusinessOutlined sx={{ color: "#fff" }} />,
      color: "--color-red",

      backgroundColor: "--color-red-light",
    },

    {
      title: `⦁	Software/App Development:  We develop software based on client’ request in order to meet up with their business needs.
      `,
      id: nanoid(),

      icon: <BusinessOutlined sx={{ color: "#fff" }} />,
      color: "--color-brand-instagram",

      backgroundColor: "--color-brand-instagram-light",
    },
    {
      title: `⦁	Automation of account department using Microsoft Dynamics GP:
      Bring greater control over your financials, inventory, and operations with Dynamics GP, a business management solution for small and medium-sized businesses that go beyond accounting software. Get up and running quickly with a solution that’s flexible, configurable, and designed to grow with you.
      `,
      id: nanoid(),
      icon: <BusinessOutlined sx={{ color: "#fff" }} />,
      color: "--color-pink-dark",
      backgroundColor: "--color-pink",
    },
  ];
  return (
    <React.Fragment>
      <Navbar />
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
            Accounting Business Solutions
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

                <Typography
                  variant="body2"
                  sx={{ fontSize: 17, pt: 2 }}
                  color="GrayText"
                  lineHeight={1.4}
                >
                  {quality.title}
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
