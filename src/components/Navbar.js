import { ArrowDropDown } from "@mui/icons-material";
import {
  AppBar,
  Button,
  List,
  ListItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { nanoid } from "nanoid";
import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [persist, setPersist] = React.useState(true);

  const solutionHandler = () => {
    setIsOpen((state) => !state);
  };

  const activeClass = isOpen ? "active-dropdown" : "";

  const links = [
    { pathname: "Home", id: nanoid(), path: "" },
    { pathname: "About", id: nanoid(), path: "" },
    {
      pathname: "Solutions",
      id: nanoid(),
      eventHandler: solutionHandler,
      subUl: [
        {
          pathname: "Enterprise Network Infrastructure",
          id: nanoid(),
          path: "enterprise-network-infrastructure",
        },
        {
          pathname: "Enterprise Business Solutions",
          id: nanoid(),
          path: "enterprise-business-solutions",
        },
        {
          pathname: "Fiber To the home",
          id: nanoid(),
          path: "fiber-to-the-home",
        },

        {
          pathname: "Advanced Business Telephone Solution",
          id: nanoid(),
          path: "advanced-business-telephone",
        },
      ],
    },
    { pathname: "Our Clients", id: nanoid(), path: "" },
    { pathname: "Training", id: nanoid(), path: "" },
    { pathname: "Contact", id: nanoid(), path: "" },
  ];
  return (
    <AppBar variant="elevation" elevation={0} color="transparent">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 100px !important",
        }}
      >
        <Box>
          <Typography variant="h5">Logo</Typography>
        </Box>
        <Box sx={{ display: "flex", position: "relative" }}>
          {links.map((link) => (
            <React.Fragment>
              <Button
                key={link.id}
                variant="text"
                color="inherit"
                endIcon={link.subUl && <ArrowDropDown />}
                onClick={link.subUl && link.eventHandler}
                className="use-header-font increase-font-size MuiButtonBase-root-navbar"
                sx={{ color: persist ? "white" : "#555" }}
              >
                {link.pathname}
              </Button>
              {link.subUl && (
                <List component={Paper} className={`dropdown ${activeClass}`}>
                  {link.subUl.map(({ pathname, id, path }) => (
                    <ListItem button>{pathname}</ListItem>
                  ))}
                </List>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
