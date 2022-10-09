import {
  HeadsetMicOutlined,
  LocationOnOutlined,
  MarkunreadOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <Box
      sx={(theme) => ({
        pt: 3,
        marginTop: 10,
        [theme.breakpoints.down("sm")]: {
          marginTop: 2,
        },
      })}
    >
      <Container>
        <Box
          sx={(theme) => ({
            mb: 6,
            mt: 10,

            [theme.breakpoints.down("sm")]: {
              mt: 15,
              mb: 1,
            },
          })}
          className="place--center"
        >
          <Typography
            variant="body2"
            className="use-header-font"
            color="GrayText"
            sx={{ lineHeight: "1.2rem", mb: 1 }}
          >
            {` We are happy to hear from you.`}
          </Typography>
          <Typography
            variant="h2"
            fontWeight={900}
            sx={(theme) => ({
              p: "0 200px",
              [theme.breakpoints.down("sm")]: {
                p: "0 10px",
              },
            })}
          >
            Get In Touch With Us Today...
          </Typography>
        </Box>
        <Grid container spacing={10} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8519519675874!2d3.3215740147708206!3d6.54037269526944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f0565ab5627%3A0xf3fe427f84cfac31!2sSMOOTH%20BROADBAND!5e0!3m2!1sen!2sng!4v1665315531054!5m2!1sen!2sng"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <List variant="outlined" component={Paper}>
              <ListItem>
                <ListItemIcon>
                  <LocationOnOutlined />
                </ListItemIcon>
                <ListItemText
                  primary="Office Address"
                  secondary="2nd Floor, Dodondawa Plaza, 48, Chivita Avenue, Ajao Estate, Lagos State"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <HeadsetMicOutlined />
                </ListItemIcon>
                <ListItemText
                  primary="Official Phone Number"
                  secondary="+234 905 738 7754"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <MarkunreadOutlined />
                </ListItemIcon>
                <ListItemText
                  primary="Official Email Address"
                  secondary="info@wancoreng.com"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
