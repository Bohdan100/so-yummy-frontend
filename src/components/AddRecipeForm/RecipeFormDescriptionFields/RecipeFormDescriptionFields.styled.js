import styled from 'styled-components';

export const InfoWrapper = styled.div`
  margin-bottom: 104px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
    justify-content: center;
    margin-bottom: 104px;
  }

  @media screen and (min-width: 1440px) {
    gap: 50px;
    margin-bottom: 104px;
  }
`;

export const ImgWrapperForError = styled.div`
  position: relative;

  @media screen and (max-width: 767px) {
    margin-bottom: 32px;
  }
`;

export const ErrMsgForImg = styled.p`
  position: absolute;
  left: 0;
  top: 101%;
  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.errMsgText};

  @media screen and (max-width: 767px) {
    left: 50%;
    top: 102%;
    transform: translateX(-50%);
    text-align: center;
  }
`;

export const Descriptions = styled.div`
  input::placeholder {
    opacity: 1;
    color: ${p => p.theme.colors.placeholderTextAddRecipe};
  }

  input::-webkit-input-placeholder {
    color: ${p => p.theme.colors.placeholderTextAddRecipe};
  }
`;

export const WrapperErrMessForTitle = styled.div`
  position: relative;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  border: transparent;
  background-color: inherit;
  border-bottom: ${p => p.theme.borders.inputAddRecipeForm};
  padding-bottom: 18px;
  outline: transparent;

  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.searchSelect};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.inputTextAddRecipe};

  &::placeholder {
    font-size: 14px;
    line-height: ${p => p.theme.lineHeights.searchSelect};
    letter-spacing: ${p => p.theme.letterSpacings.content};
    color: inherit;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 393px;
    height: 43px;

    &::placeholder {
      font-size: 16px;
    }
  }
`;

export const ErrMessage = styled.p`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: -18px;
  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.errMsgText};
`;

export const WrapperErrMessForDescrip = styled.div`
  position: relative;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const WrapperCategory = styled.div`
  position: relative;
  cursor: pointer;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const WrapperCookingTime = styled.div`
  position: relative;
  cursor: pointer;
`;

export const SelectStyled = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  padding-top: 3px;
  width: 100%;
  height: 100%;
  justify-content: right;
  gap: 13px;
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.subheader};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const WrapperOption = styled.span`
  display: inline-flex;
  align-items: center;
  height: 19px;
  color: ${p => p.theme.colors.inputTextAddRecipe};
`;

export const ArrowWrapper = styled.span`
  height: auto;
  display: inline-flex;
`;

export const SelectContent = styled.ul`
  position: absolute;
  top: 27px;
  right: 0;
  z-index: 5;
  width: 123px;
  height: 144px;
  padding: 8px 14px;
  overflow-y: auto;
  border-radius: ${p => p.theme.radii.btnStandart};
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.searchSelect};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.searchSelectText};
  background: ${p => p.theme.colors.selectBg};
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);

  @media screen and (min-width: 768px) {
    padding: 8px 18px;
    width: 132px;
    height: 162px;
  }

  & ::-webkit-scrollbar {
    width: 4px;
    height: 93px;
  }

  & ::-webkit-scrollbar-track {
    background-color: ${p => p.theme.colors.scrollbar};
    border-radius: 12px;
  }

  & ::-webkit-scrollbar-thumb {
    height: 93px;
    border-radius: 12px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: ${p => p.theme.colors.scrollbar};
  }
`;

export const SelectItem = styled.li`
  color: ${p => p.color};

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;
