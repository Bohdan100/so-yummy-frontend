import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Field, Form } from 'formik';

export const Container = styled.div`
  max-width: ${p => p.theme.breakpoints[0]};
  display: flex;
  align-self: center;
  margin: 0 auto;
  padding: 0 20px;
  position: absolute;
  z-index: 2;
  top: 302px;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: ${p => p.theme.breakpoints[1]};
    padding: 0 32px;
    top: 443px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    max-width: ${p => p.theme.breakpoints[2]};
    padding: 0px;
    position: relative;
    margin: 0;
    top: 0px;
  }
`;

export const StyledForm = styled(Form)`
  width: 335px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 32px 28px;
  background-color: ${p => p.theme.colors.formBgCol};
  border-radius: ${p => p.theme.radii.form};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  transition: ${p => p.theme.transitions.main};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 500px;
    padding: 44px 50px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 18px;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights[2]};
  font-size: 24px;
  line-height: ${p => p.theme.lineHeights.userLink};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  font-feature-settings: 'liga' off;
  color: ${p => p.theme.colors.btnTextLight};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 32px;
    font-size: 28px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    gap: 24px;
  }
`;

export const Label = styled.label`
  position: relative;
  &:hover > *,
  &:focus-within > * {
    opacity: 1;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  display: block;
  font-size: 14px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.searchSelect};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  padding: 12px 12px 12px 40px;
  opacity: 0.8;
  color: ${p => p.theme.colors.inputPh};
  outline: none;
  background-color: transparent;
  border-radius: ${p => p.theme.radii.btnStandart};
  border: ${p => p.theme.borders.inputStandart};
  transition: ${p => p.theme.transitions.main};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 18px;
    padding: 16px 16px 16px 50px;
  }
  &:focus:not(:disabled),
  &:hover:not(:disabled) {
    border-color: ${p => p.theme.colors.inputPh};
    color: ${p => p.theme.colors.inputPh};
    opacity: 1;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const Button = styled.button`
  align-self: center;
  width: 100%;
  height: 45px;
  padding: 12px;
  display: block;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-size: 16px;
  margin-top: 28px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.btnText};
  color: ${p => p.theme.colors.btnTextLight};
  background-color: ${p => p.theme.colors.mainAccent};
  border-radius: ${p => p.theme.radii.btnStandart};
  border: transparent;
  outline: transparent;
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: 50px;
  }
  &:focus:not(:disabled),
  &:hover:not(:disabled) {
    color: ${p => p.theme.colors.btnHoverBg};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const StyledLink = styled(Link)`
  position: absolute;
  bottom: -21px;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.searchSelect};
  color: ${p => p.theme.colors.inputPh};
  text-decoration-line: underline;
  transition: ${p => p.theme.transitions.main};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 16px;
    bottom: -18px;
  }
  &:focus,
  &:hover {
    text-decoration: none;
  }
`;

export const ErrorBox = styled.div`
  font-size: 14px;
  margin-top: 8px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.searchSelect};
  color: ${p => p.theme.colors.inputPh};
  transition: ${p => p.theme.transitions.main};
`;

