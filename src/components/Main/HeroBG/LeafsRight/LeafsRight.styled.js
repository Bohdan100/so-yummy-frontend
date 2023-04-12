import styled from 'styled-components';
import leafsRight from '../../../../images/bgPages/mainPage/leafs-right.png';
import leafsRightTab from '../../../../images/bgPages/mainPage/leafs-right-tab.png';
import leafsRightDesc from '../../../../images/bgPages/mainPage/leafs-right-desc.png';

export const BgContainerRight = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  z-index: -2;
  width: 375px;
  height: 824px;
  background-image: url(${leafsRight});
  background-size: cover;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    top: 0;
    width: 596px;
    height: 789px;
    background-image: url(${leafsRightTab});
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 918px;
    height: 833px;
    background-image: url(${leafsRightDesc});
  }
`;
