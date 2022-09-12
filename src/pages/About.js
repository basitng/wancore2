import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionFour from "../components/Sections/About/SectionFour";
import SectionOne from "../components/Sections/About/SectionOne";
import SectionThree from "../components/Sections/About/SectionThree";
import SectionTwo from "../components/Sections/About/SectionTwo";
import SectionSix from "../components/Sections/SectionSix";

export default function About() {
  return (
    <React.Fragment>
      <Navbar persisted={false} />
      <SectionOne />
      <Box className="0--bg">
        <Container>
          <SectionTwo />
          <SectionThree />
        </Container>
        <SectionFour />
        <Container>
          <SectionSix />
        </Container>

        <Footer />
      </Box>
    </React.Fragment>
  );
}
