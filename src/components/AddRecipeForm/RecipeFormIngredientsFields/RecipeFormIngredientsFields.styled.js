import styled from 'styled-components';

export const IngridientsFieldsWrapper = styled.div`
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    width: 609px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
  }
`;

export const Title = styled.h3`
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: 24px;
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.secondaryDark};
`;

export const BtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  border: ${p => p.theme.borders.countBtns};
  border-radius: 18px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 32px;
  }
`;

export const BtnDecrease = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
  padding: 7px 10px 7px 14px;

  svg {
    stroke: ${p => p.theme.colors.btnDecrease};
    stroke-opacity: 1;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    padding: 8px 10px 8px 15px;
  }
`;

export const BtnIncrease = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
  padding: 7px 14px 7px 10px;

  &::disabled {
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    padding: 8px 15px 8px 10px;
  }
`;

export const AmountIngridienst = styled.div`
  min-width: 16px;
  padding: 6px 3px;
  text-align: center;
  color: ${p => p.theme.colors.amountIngr};

  @media screen and (min-width: 768px) {
    min-width: 20px;
    padding: 4px 3px;
    text-align: center;
  }
`;

export const WrapperTextErr = styled.div`
  position: relative;
`;

export const TextNotify = styled.p`
  color: ${p => p.theme.colors.mainGrey};
`;

export const ErrMessage = styled.p`
  position: absolute;
  top: 140%;
  left: 0;
  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.errMsgText};
`;
