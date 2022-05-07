import styled from "styled-components";

const NavBar = styled.nav`
  width: 100%;
  height: auto;
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  background: var(--bg);
  @media screen and (max-width: 620px) {
    padding: 10px 20px;
  }
  div:first-child {
    h3 {
      color: var(--overlay);
    }
  }
  ul {
    @media screen and (max-width: 620px) {
      a {
        display: none;
      }
    }
    a {
      color: var(--overlay);
      margin: 10px;
      text-decoration: none;
      position: relative;
      font-size: 20px;
      transition: 300ms ease-out;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0%;
        height: 0.1rem;
        background: var(--text2);
        transition: 300ms ease-out;
        transform-origin: left;
      }
      &:hover::before {
        width: 100%;
      }
      &:hover {
        color: var(--text2);
      }
    }
  }
`;
const Menu = styled.div`
  display: none;
  @media screen and (max-width: 620px) {
    display: block;
    cursor: pointer;
    div {
      width: 2.4rem;
      height: 0.2rem;
      background-color: var(--overlay);
      margin: 5px;
    }
  }
`;
export { NavBar, Menu };
