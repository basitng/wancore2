import React from "react";
import Marquee from "react-marquee-slider";

import Dell from "../../assets/images/dell.png";
import Hp from "../../assets/images/hp.png";
import Cyberoam from "../../assets/images/cyberoam.png";
import Microsoft from "../../assets/images/microsoft.png";
import Oracle from "../../assets/images/oracle.png";
import Sage from "../../assets/images/sage.png";
import Veeam from "../../assets/images/veeam.png";
import {
  MarqueeContainer,
  PartnerHeader,
  PartnersContainer,
} from "./Partner.styled";
import Indicator from "../indicator";

const id = Math.random(10000) * Math.PI * 100;
export default function _Partners() {
  const Partners = [
    { media: Dell, id },
    { media: Hp, id },
    { media: Microsoft, id },
    { media: Cyberoam, id },
    { media: Oracle, id },
    { media: Sage, id },
    { media: Veeam, id },
  ];
  return (
    <PartnersContainer>
      <PartnerHeader>
        <h1>
          <div>
            <span>P</span>artners
          </div>
        </h1>
        <p>
          We collaborate with world-top brands to deliver world-class products
          in it industry; That why we are loved by many
        </p>
      </PartnerHeader>
      <MarqueeContainer>
        <Marquee direction="ltr" scatterRandomly={false} velocity={50}>
          {Partners.map((item) => (
            <img key={item.id} src={item.media} />
          ))}
        </Marquee>
      </MarqueeContainer>
      <br />
      <Indicator number={"04"} mode="light" />
    </PartnersContainer>
  );
}
