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
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 1240px;
    height: 404px;
  }
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
  display: flex;
  flex-direction: column;
  width: 173px;
  margin-left: 14px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-left: 24px;
    width: auto;
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
    padding-bottom: 0;
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
export const TextWrapper = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 298px;
    /* margin-bottom: 58px; */
  }
`;
export const CookingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  /* @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: 58px;
  } */
`;

export const Time = styled.span`
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 10px;
  line-height: ${p => p.theme.lineHeights.time};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.secondaryDark};

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 14px;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
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
  display: block;
  margin: auto;
  width: 10px;
  height: 11px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 24px;
    height: 24px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  /* align-content: space-between; */
`;
export const RecipePageBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 10px;
  color: ${p => p.theme.colors.bodyBg};
  padding: 10px 18px;
  background-color: ${p => p.theme.colors.mainHeaderText};

  outline: none;
  border: none;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  text-align: center;
  /* border: 1px solid ${p => p.theme.colors.mainAccent}; */
  cursor: pointer;
  transition: ${({ theme }) => {
    return theme.transitions.main;
  }};
  /* &:hover {
    color: ${p => p.theme.colors.btnTextLight};
    background-color: ${p => p.theme.colors.mainAccent};
  } */
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 16px;
    padding: 12px 32px;
  }
`;
