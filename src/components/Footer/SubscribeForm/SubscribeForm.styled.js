import { ReactComponent as Mail } from '../../../images/icons/mail.svg';
import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  margin-top: 32px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 204px;

  @media screen and (min-width: 768px) {
    margin-top: 72px;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: auto;
    gap: 12px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0;
    gap: 0;
    flex-direction: column;
    width: 339px;
  }
`;

export const FormWrap = styled.div`
  display: block;
  align-items: center;

  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    max-width: 338px;
    margin-left: 235px;

    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.02em;
    text-align: left;

    :not(:last-child) {
      margin-bottom: 28px;
    }
  }
`;
export const TexrWrap = styled.div`
  margin-bottom: 28px;
`;
export const SubscribeTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: ${p => p.theme.colors.mainWhite};
  margin-bottom: 14px;
`;

export const SubscribeText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.mainWhite};
`;
export const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  width: 204px;
  height: 38px;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.mainWhite};
  background-color: transparent;
  border-radius: 6px;
  padding-left: 42px;
  padding-right: 38px;
  border: 1px solid ${({ borderColor }) => borderColor};
  outline: transparent;
  transition: ${p => p.theme.transitions.main};

  @media screen and (min-width: 768px) {
    width: 259px;
    height: 50px;
    padding-left: 51px;
    font-size: 14px;
    line-height: 21px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 51px;
    margin-bottom: 16px;

    width: 338px;
    height: 59px;
    margin-bottom: 16px;
  }
  :hover,
  :focus {
    border: 1px solid ${({ color }) => color};
    &::placeholder {
      opacity: 1;
    }
  }
  ::placeholder {
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: ${p => p.theme.colors.mainWhite};
    opacity: 0.8;
    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 21px;
    }
  }
  :-webkit-autofill {
    transition: background-color 250s linear, color 250s linear;
  }
`;
export const MailStyled = styled(Mail)`
  position: absolute;
  top: 50%;
  left: 14px;
  width: 16px;
  height: 12px;
  fill: ${({ color }) => color};
  :hover {
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 16px;
    top: 50%;
    left: 15px;
  }
  @media screen and (min-width: 1440px) {
    top: 50%;
    left: 16px;
  }
`;

export const SubscribeButton = styled.button`
  width: 204px;
  height: 38px;
  background-color: ${p => p.theme.colors.footerBtnBg};
  color: ${p => p.theme.colors.btnTextLight};
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};
  @media screen and (min-width: 768px) {
    width: 171px;
    height: 50px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 16px;
    width: 100%;
    height: 60px;
    font-size: 16px;
    line-height: 18px;
  }
  :hover:not([disabled]),
  :focus:not([disabled]) {
    color: ${p => p.theme.colors.btnHoverText};
  }

  &[disabled] {
    opacity: 0.7;
  }
`;
