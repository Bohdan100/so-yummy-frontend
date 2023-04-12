import styled from 'styled-components';
import leafsLeft from '../../../../images/bgPages/mainPage/leafs-left.png';
import leafsLeftTab from '../../../../images/bgPages/mainPage/leafs-left-tab.png';
import leafsLeftDesc from '../../../../images/bgPages/mainPage/leafs-left-desc.png';

export const BgContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  z-index: -2;
  width: 48px;
  height: 202px;
  background-image: url(${leafsLeft});
  background-size: cover;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    top: 0;
    width: 67px;
    height: 323px;
    background-image: url(${leafsLeftTab});
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 116px;
    height: 398px;
    background-image: url(${leafsLeftDesc});
  }
`;
