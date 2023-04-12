import styled from 'styled-components';
import arrowTab from '../../../../images/bgPages/mainPage/arrow-tab.png';
import arrowDesc from '../../../../images/bgPages/mainPage//arrow-desc.png';
export const BgContainerArrow = styled.div`
  position: absolute;
  z-index: 1;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    top: 380px;
    right: -320px;
    width: 170px;
    height: 137px;
    background-image: url(${arrowTab});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    background-image: url(${arrowDesc});
    top: 440px;
    right: -360px;
    width: 190px;
    height: 157px;
  }
`;
