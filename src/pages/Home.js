import React from "react";
import { Container } from "@mui/material";
import { useInView } from "react-intersection-observer";
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
  const { ref: myRef, inView, entry } = useInView();

  const changeText = inView ? "#fff" : "#555";
  const changeBg = inView ? "transparent" : "#fff";
  const changeElev = inView ? 0 : 1;

  return (
    <React.Fragment>
      <Navbar color={changeText} raised={changeElev} bg={changeBg} />
      <div ref={myRef}>
        <Banner />
      </div>
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
