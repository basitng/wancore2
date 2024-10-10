import { ArrowDropDown, MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Hidden,
  IconButton,
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
import Sidebar from "./Sidebar";
import logo from "../assets/logo.png";

export default function Navbar({ bg, color, raised }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const solutionHandler = () => {
    setIsOpen((state) => !state);
  };

  const handleOpenDrawer = () => {
    setOpen((open) => !open);
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
          path: "server-solution",
        },
        {
          pathname: "Fiber Access Network (FTTH)",
          id: nanoid(),
          path: "smart-home",
        },
        {
          pathname: "Advanced Business Telephone Solution",
          id: nanoid(),
          path: "advanced-business-telephone",
        },
      ],
    },
    { pathname: "Project Samples", id: nanoid(), path: "projects" },
    { pathname: "Training", id: nanoid(), path: "training" },
    // { pathname: "Contact", id: nanoid(), path: "contact" },
  ];
  return (
    <AppBar elevation={raised} sx={{ background: bg }}>
      <Toolbar
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 100px !important",
          [theme.breakpoints.down("sm")]: {
            padding: "10px !important",
          },
        })}
      >
        <Box component={Link} to="/">
          <img src={logo} style={{ width: "80px", height: "80px" }} />
        </Box>
        <Hidden mdUp>
          <IconButton
            onClick={handleOpenDrawer}
            sx={{ background: "var(--coral)" }}
          >
            <MenuOutlined />
          </IconButton>
        </Hidden>
        <Hidden smDown>
          <Box sx={{ display: "flex", position: "relative" }}>
            {links.map((link) => (
              <React.Fragment>
                <Button
                  key={link.id}
                  variant="text"
                  component={Link}
                  to={link.subUl ? "#" : `/${link.path}`}
                  endIcon={link.subUl && <ArrowDropDown />}
                  onClick={link.subUl && link.eventHandler}
                  className="use-header-font increase-font-size MuiButtonBase-root-navbar"
                  sx={{ color: `${color} !important` }}
                >
                  {link.pathname}
                </Button>
                {link.subUl && (
                  <List component={Paper} className={`dropdown ${activeClass}`}>
                    {link.subUl.map(({ pathname, id, path }) => (
                      <ListItem
                        component={Link}
                        key={id}
                        to={`/${path}`}
                        button
                      >
                        {pathname}
                      </ListItem>
                    ))}
                  </List>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Hidden>
      </Toolbar>
      <Sidebar trigger={open} setOpen={setOpen} />
    </AppBar>
  );
}
