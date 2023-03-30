import styled from "styled-components";

const Spinner = styled.div`
  border: 5px solid var(--lightGray);
  border-top-color: var(--medGray);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Spinner };
