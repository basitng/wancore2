import {
  ArrowDropDown,
  Facebook,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { nanoid } from "nanoid";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [isOpen, setIsOpen] = React.useState(false);

  const solutionHandler = () => {
    setIsOpen((state) => !state);
  };

  const activeClass = isOpen ? "active-dropdown" : "";
  const links = [
    { pathname: "Home", id: nanoid(), path: "" },
    { pathname: "About", id: nanoid(), path: "about" },

    {
      pathname: "Server Solutions",
      id: nanoid(),
      path: "server-solution",
    },
    {
      pathname: "Smart Home",
      id: nanoid(),
      path: "smart-home",
    },
    { pathname: "Projects", id: nanoid(), path: "projects" },
    { pathname: "Training", id: nanoid(), path: "training" },
    { pathname: "Contact", id: nanoid(), path: "contact" },
  ];

  // 48 chivita avenue ajao estate
  return (
    <React.Fragment>
      <Grid container sx={{ mt: 5, p: "30px 0px" }}>
        <Divider
          variant="fullWidth"
          sx={{ color: "#555", width: "100%", height: "20px", mb: 5 }}
        ></Divider>
        <Grid item xs={12} md={4} sm={12}>
          <Typography variant="h5">Logo</Typography>
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <Box
            sx={(theme) => ({
              display: "flex",
              position: "relative",
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
              },
            })}
          >
            {links.map((link) => (
              <React.Fragment>
                <Button
                  component={Link}
                  to={`/${link.path}`}
                  key={link.id}
                  variant="text"
                  color="inherit"
                  className="use-header-font "
                  sx={{ color: "#555" }}
                >
                  {link.pathname}
                </Button>
              </React.Fragment>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={2} sm={12}>
          <Box sx={{ display: "flex" }}>
            <IconButton>
              <Facebook sx={{ color: "#555" }} />
            </IconButton>
            <IconButton>
              <WhatsApp sx={{ color: "#555" }} />
            </IconButton>
            <IconButton>
              <Twitter sx={{ color: "#555" }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
