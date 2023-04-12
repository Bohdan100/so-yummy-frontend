import styled from 'styled-components';
import plate from '../../../../images/bgPages/mainPage//plate.png';

export const BgContainerPlate = styled.div`
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  width: 320px;
  height: 296px;
  background-image: url(${plate});
  background-size: contain;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 378px;
    height: 351px;
    top: 95px;
    left: 525px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 578px;
    height: 539px;
    top: 52px;
    left: 770px;
  }
`;
