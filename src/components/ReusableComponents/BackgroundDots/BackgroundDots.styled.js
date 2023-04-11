import styled from 'styled-components';

export const StyledDiv = styled.div`
  z-index: -1;
  position: absolute;
  top: 71px;
  width: 345px;
  height: 192px;
  background-image: ${p => p.backgroundImage};
  background-repeat: no-repeat;
  background-size: 10px 10px, 7px 7px, 10px 10px;
  background-position: left 105px top 14px, left 231px top 79px,
    left 332px top 46px;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    top: 74px;
    width: 718px;
    height: 240px;
    background-image: ${p => p.backgroundImage};
    background-size: 18px 18px, 15px 15px, 18px 18px;
    background-position: left 189px top 17px, left 407px top 87px,
      left 695px top 31px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    top: 67px;
    width: 1180px;
    height: 240px;
    background-image: ${p => p.backgroundImage};
    background-size: 18px 18px, 15px 15px, 18px 18px;
    background-position: left 228px top 56px, left 706px top 139px,
      left 1149px top 69px;
  }
`;
