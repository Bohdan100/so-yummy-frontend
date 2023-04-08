import styled from 'styled-components';

import bgImg from '../../images/bgPages/mainPage/main_hero1x_desktop.png';

export const MainPageTitleWrapper = styled.div`
  background: url(${bgImg}) no-repeat center center fixed;
  background-size: cover;
  height: 90vh;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  h1 {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    font-size: 5rem;
    font-weight: 600;
    text-shadow: 3px 3px rgba(0, 0, 0, 0.2);
    margin: 0;
    padding: 0;
  }

  p {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    font-size: 2rem;
    font-weight: 400;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
      top: 25%;
    }

    p {
      font-size: 1rem;
      top: 35%;
    }
  }
`;

