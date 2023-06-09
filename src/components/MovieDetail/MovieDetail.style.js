import styled from "styled-components";
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../../utils/config";

const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieDetail 1s;

  @keyframes animateMovieDetail {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0px auto;
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;
const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }
  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 25px;
    margin: 0;
  }
  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export { Wrapper, Content, Text };
