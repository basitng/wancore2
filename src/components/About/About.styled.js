import styled from "styled-components";
import img from "../../assets/images/2.jpg";
const AboutContainer = styled.div`
  width: 100%;
  padding: 100px 50px;
  background: var(--text2);
  position: relative;
`;

const HeadingText = styled.h1`
  font-size: 6rem;
  color: var(--text3);
  text-decoration: underline;
  @media screen and (max-width: 620px) {
    font-size: 3rem;
  }
`;

const Tracker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin-top: 3rem;
  background: var(--overlay);
  border-radius: 20px;
  padding: 10px;
  div {
    width: 6px;
    border-radius: 5px;
    background: var(--text1);
    margin: 3px;
  }
  div:nth-child(1) {
    height: 10px;
  }
  div:nth-child(2) {
    height: 20px;
  }
  div:nth-child(3) {
    height: 10px;
  }
  div:nth-child(4) {
    height: 20px;
  }
  div:nth-child(5) {
    height: 10px;
  }
`;

export { AboutContainer, HeadingText, Tracker };
