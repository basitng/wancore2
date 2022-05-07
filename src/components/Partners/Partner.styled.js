import styled from "styled-components";

const PartnersContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 100px 10px;
  background: var(--text2);
`;

const PartnerHeader = styled.div`
  width: 100%;
  padding: 30px 200px;
  display: grid;
  text-align: center;
  place-content: center;
  @media screen and (max-width: 620px) {
    padding: 30px 10px;
  }
  h1 {
    text-decoration: underline;
    font-size: 6rem;
    @media screen and (max-width: 620px) {
      font-size: 3rem;
    }
  }
  p {
    font-size: 1.5rem;
    color: var(--text3);
  }
`;

const MarqueeContainer = styled.div`
  img {
    margin: 10px;
    width: 200px;
    height: 100px;
    object-fit: contain;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export { PartnerHeader, PartnersContainer, MarqueeContainer };
