import styled from "styled-components";
import Bg from "../../assets/images/illustrations/bg.svg";

const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 100px 30px;
  background: #000;
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
