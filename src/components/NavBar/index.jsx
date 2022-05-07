import React from "react";
import { Link } from "react-router-dom";
import { Menu, NavBar } from "./NavBar.styled";
export default function _NavBar() {
  return (
    <NavBar>
      <div className="logo">
        <h3>Wancore</h3>
      </div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/">About us</Link>
        <Link to="/">Services</Link>
        <Link to="/">Partners</Link>
        <Link to="/">Contact</Link>
      </ul>
      <Menu>
        <div />
        <div />
      </Menu>
    </NavBar>
  );
}
