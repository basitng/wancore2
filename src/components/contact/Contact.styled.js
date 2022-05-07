import styled from "styled-components";

const ContactContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 100px 50px;
  @media screen and (max-width: 620px) {
    padding: 100px 20px;
  }
`;

const ContactHeader = styled.div`
  h1 {
    font-size: 6rem;
    text-decoration-line: underline;
    color: var(--overlay);
    @media screen and (max-width: 620px) {
      font-size: 3rem;
    }
  }
  p {
    font-size: 1.5rem;
    color: var(--text3);
  }
`;

export { ContactContainer, ContactHeader };
