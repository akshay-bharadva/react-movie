import styled from "styled-components";

const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: var(--medGray);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;

export { Wrapper, Content };
