import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer, FooterHeader, LinkWrapper } from "./Footer.styled";

export default function _Footer() {
  return (
    <FooterContainer>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} md={6}>
          <FooterHeader>
            <h1>Wancore Systems</h1>
            <p>
              Wancore Systems Limited derives its competitive strength from the
              calibre of its technical expertise and management The organisation
              is managed by highly trained and experienced staff in their
              various areas of specialization and executing various projects
              while remaining committed to health, safety and environment
              protection in accordance with international practice, giving us
              the ability to deliver on our promise to our clients and
              continually exceed expectations as subcontractors are engaged as
              and when required.
            </p>
          </FooterHeader>
        </Grid>
      </Grid>
      <LinkWrapper>
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <a href="#partners">Partners</a>
        <a href="#contacts">Contact</a>
      </LinkWrapper>
    </FooterContainer>
  );
}
