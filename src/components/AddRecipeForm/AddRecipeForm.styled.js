import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  @media screen and (max-width: 767px) {
    margin-bottom: 72px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 100px;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 129px;
  height: 46px;
  background-color: ${p => p.theme.colors.recipeBlockBtnBg};

  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.searchSelect};
  color: ${p => p.theme.colors.btnTextLight};

  padding: 12px 48px;
  outline: none;
  border: none;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;

  transition: ${p => p.theme.transitions.main};

  &:focus:not(:disabled),
  &:hover:not(:disabled) {
    color: ${p => p.theme.colors.addBtnHoverText};
    background-color: ${p => p.theme.colors.addBtnHoverBg};
  }

  &[disabled] {
    opacity: 0.7;
    pointer-events: none;
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 52px;
  }
`;
