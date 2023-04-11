import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Field, Form } from 'formik';
import { ReactComponent as Google } from 'images/icons/google.svg';

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

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: space-between;
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
  overflow-wrap: normal;
  color: ${p => p.theme.colors.btnTextLight};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 32px;
    font-size: 28px;
  }
`;

export const GoogleLink = styled(Link)``;

export const GoogleIcon = styled(Google)`
  position: absolute;
  width: 25px;
  height: 25px;
  right: 50px;
  top: 40px;
  animation: pulse 2s infinite;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    right: 80px;
    top: 50px;
  }
  @media screen and (min-width: 1440px) {
    width: 32px;
    height: 32px;
    right: 50px;
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
  border-color: #fafafa30;
  ${p => p.color === 'normal' && `border-color: #FAFAFA30`};
  ${p => p.color === 'inValid' && `border-color: #E74A3B`};
  ${p => p.color === 'notSecure' && `border-color: #F6C23E`};
  ${p => p.color === 'valid' && `border-color: #3CBC81`};

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 18px;
    padding: 16px 70px 16px 50px;
  }

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
    opacity: 0.8;
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
    outline: transparent;
  }
`;

export const StatusBox = styled.div`
  font-size: 12px;
  margin-top: 8px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.searchSelect};
  transition: ${p => p.theme.transitions.main};
  color: #e74a3b;
  ${p => p.color === 'notSecure' && `color: #F6C23E`};
  ${p => p.color === 'valid' && `color: #3CBC81`};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 14px;
  }
`;

export const ErrorBox = styled.div`
  max-width: 60%;
  height: auto;
  overflow-wrap: break-word;
  align-self: baseline;
  margin-bottom: 12px;
  font-size: 12px;
  text-align: end;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.searchSelect};
  transition: ${p => p.theme.transitions.main};
  color: #e74a3b;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 14px;
    max-width: 70%;
  }
`;

export const PassIconBox = styled.div`
  position: absolute;
  display: flex;
  gap: 6px;
  height: 100%;
  top: 0px;
  right: 0px;
  padding-top: 16px;
  padding-right: 14px;
  transition: ${p => p.theme.transitions.main};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-right: 18px;
    padding-top: 20px;
    gap: 10px;
  }
`;

export const ShowPasswordBtn = styled.button`
  top: 0px;
  right: 0px;
  margin: 0px;
  padding: 0px;
  display: flex;
  width: 18px;
  height: 18px;
  transform: translateY(-25%);
  background-color: transparent;
  cursor: pointer;
  border: none;
  color: #fafafa80;
  transition: ${p => p.theme.transitions.main};
  &:focus,
  &:hover {
    color: #fafafa;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 24px;
    height: 24px;
    transform: translateY(-5%);
  }
`;
