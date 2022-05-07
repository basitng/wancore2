import styled from "styled-components";

const ServicesContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--text1);
  padding: 100px 50px;
  position: relative;
  @media screen and (max-width: 620px) {
    padding: 100px 10px;
  }
`;

const HeaderContainer = styled.header`
  width: 100%;
  padding: 0 60px;
  display: grid;
  place-content: center;
  text-align: center;
  @media screen and (max-width: 620px) {
    padding: 0 10px;
  }
  h1 {
    font-size: 6rem;
    color: var(--overlay);
    text-decoration: none;
    @media screen and (max-width: 620px) {
      font-size: 3rem;
    }
  }
  p {
    color: var(--text3);
    font-size: 1.5rem;
    padding: 0 100px;
    @media screen and (max-width: 620px) {
      padding: 0 10px;
      font-size: 1.2rem;
    }
  }
`;
const BossMan = styled.div`
  padding: 50px 100px;
  @media screen and (max-width: 620px) {
    padding: 20px 10px;
  }
`;
const ServiceCard = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;

  h1 {
    position: absolute;
    bottom: 10%;
    left: 10%;
    color: var(--text1);
  }

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    bottom: 0%;
    opacity: 0.3;
    background-color: var(--primary);
    transition: 300ms ease-out;
    z-index: 200;
  }
  &:hover::before {
    height: 0%;
  }
`;

const Gafar = styled.div`
  position: absolute;
  top: 4%;
  right: 5%;
`;
const ServiceCardImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
    transform: scale(1);
    transition: 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
    &:hover {
      transform: scale(1.2);
    }
  }
`;
export {
  BossMan,
  ServicesContainer,
  HeaderContainer,
  ServiceCard,
  ServiceCardImageWrapper,
  Gafar,
};
