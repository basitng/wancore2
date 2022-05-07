import styled from "styled-components";

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--bg);
  height: 100vh;
  position: relative;
`;
const Caption = styled.div`
  position: absolute;
  width: 100%;
  transform: translate(-50%, -50%);
  top: 50%;
  z-index: 100;
  left: 50%;
  @media screen and (max-width: 620px) {
    top: 50%;
    left: 50%;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }
  h1 {
    font-size: 7rem;
    margin-left: 4.5rem;

    color: var(--overlay);
    transition: 400ms cubic-bezier(0.075, 0.82, 0.165, 1);
    text-decoration: none;
    @media screen and (max-width: 620px) {
      font-size: 3rem;
      margin-left: 0;
      padding-left: 2rem;
      line-height: 3rem;
    }
  }
  h4 {
    font-size: 2rem;
    color: var(--overlay);
    margin-left: 22rem;
    margin-top: -1rem;
    @media screen and (max-width: 620px) {
      font-size: 1.5rem;
      margin-left: 0;
      padding-left: 2rem;
      padding-top: 2rem;
    }
  }
`;
export { Banner, Caption };
