import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../../images/icons/delete-black.svg';
export const CardWrapper = styled.div`
  display: flex;
  margin-bottom: 18px;
  border-radius: 8px;
  padding: 14px;
  background-color: ${p => p.theme.colors.mainWhite};
`;

export const ImageWrapper = styled.div`
  width: 124px;
  height: 124px;
  border-radius: 8px;
  background-color: orange;
  border: 1px, solid, red;

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
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
export const InfoWrapper = styled.div`
  padding-left: 14px;
  width: 173px;
`;

export const Title = styled.h2`
  padding-bottom: 14px;
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.secondaryDark};
`;
export const Text = styled.p`
  font-size: 8px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.description};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.mainDark};
`;

export const CookingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
`;

export const Time = styled.span`
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 10px;
  line-height: ${p => p.theme.lineHeights.time};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: #3e4462;
`;

export const DeleteButton = styled.button`
  width: 24px;
  height: 24px;
  background: #ebf3d4;
  border-radius: 4px;
`;

export const DeleteIconStyled = styled(DeleteIcon)`
  margin-right: 5px;
  stroke: black;
  display: inline-block;
  width: 14px;
  height: 14px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 20px;
    height: 20px;
  }
`;
