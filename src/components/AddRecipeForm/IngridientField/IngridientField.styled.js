import styled from 'styled-components';

export const IngridientItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 18px;

    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }
`;

export const WrapperIngredient = styled.div`
  position: relative;
  width: 198px;
  height: 53px;
  margin-right: 14px;

  @media screen and (min-width: 768px) {
    width: 398px;
    height: 59px;
    margin-right: 32px;
  }
`;

export const InputIngredient = styled.input`
  display: block;
  background-color: ${p => p.theme.colors.bgIngridientAddRecipe};
  border: ${p => p.theme.borders.inputAddRecipe};
  outline: transparent;
  height: 53px;
  border-radius: ${p => p.theme.radii.btnStandart};

  width: 198px;
  border-radius: 6px;
  padding: 16px 32px 16px 16px;

  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.searchSelect};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.inputIngText};

  &::placeholder {
    font-size: 14px;
    line-height: ${p => p.theme.lineHeights.searchSelect};
    letter-spacing: ${p => p.theme.letterSpacings.content};
    color: ${p => p.theme.colors.searchSelectText};
    opacity: 0.5;
  }

  @media screen and (min-width: 768px) {
    width: 398px;
    height: 59px;
    padding: 16px 38px 16px 16px;

    font-size: 16px;

    &::placeholder {
      font-size: 16px;
    }
  }
`;

export const ArrowWrapper = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  height: 53px;
  width: 32px;

  @media screen and (min-width: 768px) {
    height: 59px;
    width: 38px;
  }
`;

export const SelectContentIngridients = styled.ul`
  position: absolute;
  width: 100%;
  top: 100%;
  right: 0;
  z-index: 5;
  overflow-y: auto;
  border-radius: ${p => p.theme.radii.btnStandart};
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.searchSelect};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.placeholderTextAddRecipe};
  background: ${p => p.theme.colors.selectBg};
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);

  max-height: 154px;
  padding: 8px 18px;
  pointer-events: all;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    max-height: 172px;
    font-size: 14px;
  }

  & ::-webkit-scrollbar {
    width: 16px;
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
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const WrapperAmount = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: baseline;
  min-width: 84px;
  height: 53px;
  border: ${p => p.theme.borders.inputAddRecipe};
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    min-width: 97px;
    height: 59px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 99px;
  }
`;

export const InputAmount = styled.input`
  display: block;
  background-color: ${p => p.theme.colors.bgIngridientAddRecipe};
  border: none;

  outline: transparent;
  height: 53px;

  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.searchSelect};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.inputIngText};

  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  max-width: 40px;
  padding: 16px 2px 15px 2px;
  text-align: end;

  &::placeholder {
    font-size: 14px;
    line-height: ${p => p.theme.lineHeights.searchSelect};
    letter-spacing: ${p => p.theme.letterSpacings.content};
    color: ${p => p.theme.colors.searchSelectText};
    opacity: 0.5;
  }

  @media screen and (min-width: 768px) {
    height: 59px;
    max-width: 44px;
    font-size: 16px;

    &::placeholder {
      font-size: 16px;
    }
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 0;
  border: none;
  background-color: inherit;
  transition: transform 250ms ease-in-out;
  padding: 0;

  &:hover {
    transform: scale3d(1.2, 1.2, 1.2);
  }

  svg {
    width: 18px;
    height: 18px;
    stroke: ${p => p.theme.colors.amountIngr};

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ErrMessage = styled.p`
  position: absolute;
  left: 0;
  bottom: -15px;
  width: 100%;
  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.errMsgText};

  @media screen and (min-width: 768px) {
    bottom: -18px;
  }

  @media screen and (min-width: 1440px) {
    bottom: -20px;
  }
`;

export const WrapperUnit = styled.div`
  flex-shrink: 0;
  background-color: ${p => p.theme.colors.bgIngridientAddRecipe};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  height: 100%;
  width: 67px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 75px;
  }

  @media screen and (min-width: 1440px) {
    width: 70px;
  }
`;

export const SelectUnit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 4px;
  padding-left: 2px;
  padding-right: 10px;
  @media screen and (min-width: 768px) {
    gap: 6px;
  }

  @media screen and (min-width: 1440px) {
    gap: 12px;
  }
`;

export const WrapperOptionUnit = styled.span`
  display: block;
  text-align: center;
  width: 100%;
  color: ${p => p.theme.colors.secondaryDark};
`;

export const SelectContentUnits = styled.ul`
  position: absolute;
  width: 100%;
  top: 100%;
  right: 0;
  z-index: 5;
  overflow-y: auto;
  border-radius: ${p => p.theme.radii.btnStandart};
  font-size: 12px;
  line-height: ${p => p.theme.lineHeights.searchSelect};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.placeholderTextAddRecipe};
  background: ${p => p.theme.colors.selectBg};
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);

  height: 141px;
  padding: 8px 8px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    height: 166px;
    padding: 12px 10px;
  }

  & ::-webkit-scrollbar {
    width: 16px;
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

export const ArrowWrapperUnit = styled.span`
  display: inline-flex;
  height: auto;
`;
