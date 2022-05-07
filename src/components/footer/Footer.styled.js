import styled from "styled-components";
import Bg from "../../assets/images/illustrations/bg.svg";

const FooterContainer = styled.div`
  width: 90%;
  padding: 100px 0px 0px 50px;
  /* height: auto; */
  display: flex;
  background: var(--text2);
  margin: 200px auto;
  position: relative;
  border-radius: 48px;
  @media screen and (max-width: 620px) {
    padding: 50px 10px;
  }
`;

const FooterHeader = styled.div`
  width: 100%;

  h1 {
    font-size: 4rem;
    text-decoration-line: underline;
    color: var(--text1);
  }
  p {
    color: var(--text1);
    font-size: 1rem;
  }
`;

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  float: right;
  a {
    color: var(--text1);
    font-size: 1.5rem;
  }
`;

export { FooterContainer, FooterHeader, LinkWrapper };
