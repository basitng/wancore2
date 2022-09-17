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
import { Link } from "react-router-dom";

export default function Navbar({ persisted }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [persist, setPersist] = React.useState(persisted);

  const solutionHandler = () => {
    setIsOpen((state) => !state);
  };

  const activeClass = isOpen ? "active-dropdown" : "";

  const links = [
    { pathname: "Home", id: nanoid(), path: "" },
    { pathname: "About", id: nanoid(), path: "about" },
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
          pathname: "Server Solutions",
          id: nanoid(),
          path: "server-solution.js",
        },

        {
          pathname: "Advanced Business Telephone Solution",
          id: nanoid(),
          path: "advanced-business-telephone",
        },
      ],
    },
    { pathname: "Our Clients", id: nanoid(), path: "client" },
    { pathname: "Training", id: nanoid(), path: "training" },
    { pathname: "Contact", id: nanoid(), path: "contact" },
  ];
  return (
    <AppBar variant="outlined" color="inherit">
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
                component={Link}
                to={link.subUl ? "#" : `/${link.path}`}
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
                    <ListItem component={Link} key={id} to={`/${path}`} button>
                      {pathname}
                    </ListItem>
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
