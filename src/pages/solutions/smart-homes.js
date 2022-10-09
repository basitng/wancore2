import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import ImageOne from "../../assets/images/smarthome1.jpg";
import ImageTwo from "../../assets/images/smarthome2.jpg";
import { deepOrange, indigo } from "@mui/material/colors";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default function SmartHomes() {
  return (
    <React.Fragment>
      <Navbar color="#555" raised={2} bg={"#fff"}/>
      <Container>
        <Grid
          container
          spacing={5}
          sx={{ mt: 5 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={12} sm={12}>
            <img
              src={ImageOne}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "5%",
              }}
            />
          </Grid>
          <Grid item xs={12} md={12} sm={12}>
            <Typography
              variant="body2"
              fontWeight={"bold"}
              sx={{ color: deepOrange[600] }}
            >{`Smart Home`}</Typography>
            <Typography variant="h4" textTransform={"capitalize"}>
              Fiber-to-the-home deployment {""} (FTTH)
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 2, fontSize: 17 }}
              color="GrayText"
              className="use-header-font"
            >
              {`DESIGN AND IMPLEMENTATION OF FIBER OPTIC BACKBONE TRANSMISSION (INDOOR
          & OSP) WANCORE is a project design and management firm that is
          well-positioned to deliver comprehensive solutions in the
          telecommunications industry, with a track record of excellence in
          Telecoms Infrastructure rollout, Site Integration Management Systems,
          Base Station & Transmission Equipment Integration Engineering, Fiber
          Optics OSP implementation/maintenance, Microwave link installation,
          and Commissioning. WANCORE support services generally work with large
          telecommunications operators and equipment manufacturers to provide
          effective, long-term solutions to support their core operations. Our
          qualified team of engineers has extensive field experience, allowing
          us to form strategic partnerships/alliances with international
          companies in the areas of radio frequency, transmission, fiber optics,
          operation and maintenance, value-added services, and software
          integration, as well as utilizing world-class solutions and practices
          to ensure successful and timely cost savings.`}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={5}
          sx={{ mt: 5 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={6} sm={12}>
            <img
              src={ImageTwo}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "5%",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <Typography
              variant="body2"
              fontWeight={"bold"}
              sx={{ color: indigo[700] }}
            >{`Smart Home`}</Typography>
            <Typography variant="h4">OUR FIBER OPTICS SERVICES</Typography>
            <Typography
              variant="body2"
              sx={{ mt: 2, fontSize: 17 }}
              color="GrayText"
              className="use-header-font"
            >
              FIBRE IMPLEMENTATION PROJECTS Civil Works - Trenching, Ducting,
              Backfilling, Manhole production & Planting, special solutions for
              future damage prevention, etc Cable Works – Blowing, Splicing,
              Termination, OTDR testing FIBRE BACKBONE MAINTENANCE ⦁ Manhole
              cleaning & conversion ⦁ Fibre Fault Detection & Restoration ⦁
              Relocation of Fibre Infrastructure against foreign threats ⦁
              Regular Network Auditing ⦁ Erosion controls periodically ⦁
              Vandalized OFC infrastructure protection and restoration ⦁ Missing
              route markers replacement ⦁ Bridge attachment and degradation
              upgrades ⦁ On-going Construction work supervision ⦁ Grown up weeds
              clearing periodically
            </Typography>
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </React.Fragment>
  );
}
