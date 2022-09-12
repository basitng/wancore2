import { Container } from "@mui/material";
import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionFive from "../components/Sections/SectionFive";
import SectionFour from "../components/Sections/SectionFour";
import SectionOne from "../components/Sections/SectionOne";
import SectionSix from "../components/Sections/SectionSix";
import SectionThree from "../components/Sections/SectionThree";
import SectionTwo from "../components/Sections/SectionTwo";
function Home() {
  return (
    <React.Fragment>
      <Navbar persisted={false} />
      <Banner />
      <Container>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <Footer />
      </Container>
    </React.Fragment>
  );
}
export default Home;
