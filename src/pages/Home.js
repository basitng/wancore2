import React from "react";
import _NavBar from "../components/NavBar";
import _Banner from "../components/Banner";
import _About from "../components/About";
import _Services from "../components/Services";
import _Partners from "../components/Partners";
import _Contact from "../components/contact";
import _Footer from "../components/footer";
function Home() {
  return (
    <React.Fragment>
      <_NavBar />
      <_Banner />
      <_About />
      <_Services />
      <_Partners />
      <_Contact />
      <_Footer />
    </React.Fragment>
  );
}
export default Home;
