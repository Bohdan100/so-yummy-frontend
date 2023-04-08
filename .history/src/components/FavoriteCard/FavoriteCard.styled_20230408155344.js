import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../../images/icons/delete-black.svg';

export const CardWrapper = styled.div`
  display: flex;

  margin-bottom: 18px;
  border-radius: ${p => p.theme.radii.image};
  max-width: 343px;
  height: 152px;
  padding: 14px;
  background-color: ${p => p.theme.colors.mainWhite};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 704px;
    height: 288px;
    padding-top: 28px;
    padding-bottom: 28px;
    padding-left: 24px;
    padding-right: 24px;
  }
  /* @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 318px;
    height: 324px;
  } */
`;

export const ImageWrapper = styled.div`
  width: 124px;
  height: 124px;
  border-radius: ${p => p.theme.radii.image};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 228px;
    height: 232px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 318px;
    height: 324px;
  }
`;
export const Img = styled.img`
  display: block;
  object-fit: cover;
  border-radius: ${p => p.theme.radii.image};
`;
export const InfoWrapper = styled.div`
  width: 173px;
  margin-left: 14px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-left: 24px;
  }
  /* @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 318px;
    height: 324px;
  } */
`;

export const Title = styled.h2`
  display: block;
  padding-bottom: 14px;
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.secondaryDark};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 265px;
    font-size: 24px;
  }
`;
export const Text = styled.p`
  display: block;
  font-size: 8px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.description};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.mainDark};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 14px;
  }
`;
export const CookingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: 58px;
  }
`;

export const Time = styled.span`
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 10px;
  line-height: ${p => p.theme.lineHeights.time};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: #3e4462;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 14px;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: ${p => p.theme.colors.secondaryAccent};
  border-radius: ${p => p.theme.radii.btnIcon};

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 38px;
    height: 38px;
    margin-left: 101px;
  }
`;
export const IconSpan = styled.span`
  text-align: center;
`;
export const DeleteIconStyled = styled(DeleteIcon)`
  stroke: black;
  /* display: inline-block; */
  width: 11px;
  height: 12px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 17px;
    height: 18px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;
