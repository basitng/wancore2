import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import _Contact from "../components/_Contact";
export default function Contact() {
  return (
    <React.Fragment>
      <Navbar bg={"#fff"} color="#555" raised={2} />
      <_Contact />
      <Footer />
    </React.Fragment>
  );
}
