import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import Lottie from "react-lottie";
import { ContactContainer, ContactHeader } from "./Contact.styled";

import Bird from "../../lottie/89995-dancing-duck.json";
import { SendOutlined } from "@mui/icons-material";
export default function _Contact() {
  const defaultOptions = {
    autoPlay: true,
    loop: true,
    animationData: Bird,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <ContactContainer>
      <Grid container>
        <Grid item xs={12} md={7}>
          <ContactHeader>
            <h1>Get In Touch</h1>
            <p>We are happy to hear from you anytime, any day.</p>
          </ContactHeader>
          <form>
            <TextField variant="standard" label="Company Name" fullWidth />
            <TextField variant="standard" label="Company Phone" fullWidth />
            <TextField variant="standard" label="Message" fullWidth />
            <br />
            <br />
            <Button endIcon={<SendOutlined />} size="large" variant="contained">
              Send Message
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={5}>
          <Lottie
            isClickToPauseDisabled
            width={"100%"}
            height={"100%"}
            options={defaultOptions}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3628121743805!2d3.378633414449718!3d6.6017548240810076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92f857f14b41%3A0xef057e3833bbff16!2sOtaru%20House!5e0!3m2!1sen!2sng!4v1651317460550!5m2!1sen!2sng"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
    </ContactContainer>
  );
}
