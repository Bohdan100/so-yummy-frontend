import styled from 'styled-components';

export const WrapperTextarea = styled.div`
  margin-bottom: 18px;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const TitlePreparation = styled.h3`
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: 24px;
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.secondaryDark};
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Textarea = styled.textarea`
  font-family: inherit;
  border-radius: ${p => p.theme.radii.btnStandart};
  width: 100%;
  height: 154px;
  overflow-y: auto;
  resize: none;
  padding: 10px 16px;
  border: ${p => p.theme.borders.inputAddRecipe};
  outline: none;
  background: ${p => p.theme.colors.bgIngridientAddRecipe};
  color: ${p => p.theme.colors.inputIngText};

  &::placeholder {
    font-size: 14px;
    line-height: ${p => p.theme.lineHeights.searchSelect};
    color: ${p => p.theme.colors.placeholderTextAddRecipe};
    letter-spacing: ${p => p.theme.letterSpacings.content};
  }

  & ::-webkit-scrollbar {
    width: 15px;
  }

  & ::-webkit-scrollbar-track {
    background-color: ${p => p.theme.colors.scrollbar};
    border-radius: 12px;
  }

  & ::-webkit-scrollbar-thumb {
    height: 60px;
    border-radius: 12px;
    background-clip: content-box;
    background-color: ${p => p.theme.colors.scrollbar};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 505px;
    height: 224px;
    padding: 16px 23px;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const ErrMessage = styled.p`
  position: absolute;
  top: 98%;
  left: 0;
  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.searchSelect};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.errMsgText};
`;
