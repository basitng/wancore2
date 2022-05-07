import React from "react";
import styled from "styled-components";

const IndicatorEl = styled.h2`
  font-size: 6rem;
  font-weight: 900;
  color: ${(props) =>
    props.mode === "light" ? "var(--text4)" : "var(--text2)"};
  position: absolute;
  bottom: 3%;
  right: 5%;
  @media screen and (max-width: 620px) {
    font-size: 3rem;
  }
`;

export default function Indicator({ number, mode }) {
  return <IndicatorEl mode={mode}>{number}</IndicatorEl>;
}
