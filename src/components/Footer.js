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

export default function Footer() {
  const [isOpen, setIsOpen] = React.useState(false);

  const solutionHandler = () => {
    setIsOpen((state) => !state);
  };

  const activeClass = isOpen ? "active-dropdown" : "";
  const links = [
    { pathname: "Home", id: nanoid(), path: "" },
    { pathname: "About", id: nanoid(), path: "" },

    {
      pathname: "Fiber To the home",
      id: nanoid(),
      path: "fiber-to-the-home",
    },
    { pathname: "Our Clients", id: nanoid(), path: "" },
    { pathname: "Training", id: nanoid(), path: "" },
    { pathname: "Contact", id: nanoid(), path: "" },
  ];
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
          <Box sx={{ display: "flex", position: "relative" }}>
            {links.map((link) => (
              <React.Fragment>
                <Button
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
