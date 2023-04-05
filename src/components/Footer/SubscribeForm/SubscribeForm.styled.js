import styled from 'styled-components';

export const Form = styled.form`
  height: 50px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 1440px) {
    margin-left: auto;
  }
`;

export const FormWraper = styled.div`
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

export const SubscribeTitle = styled.h3`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;

  @media only screen and (max-width: 1439px) {
    display: none;
  }
`;

export const SubscribeText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  @media only screen and (max-width: 1439px) {
    display: none;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  /* border: 1px solid #fafafa; */
  border: 1px solid #22252a;
  border-radius: 6px;
  padding-left: 16px;
  margin-right: 12px;
  outline: none;
  margin-bottom: 8px;

  background-color: transparent;
  font-size: 16px;
  line-height: calc(20 / 16);
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;

  transition-property: border-color;
  transition-duration: var(--duration);
  transition-timing-function: var(--timing-function);
  &:focus,
  &:hover {
    border-color: var(--accent-color);
  }
  @media screen and (min-width: 768px) {
    min-width: 450px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 358px;
  }
`;

export const SubscribeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 71px;

  width: 100%;
  height: 50px;
  border: none;
  background-color: #8baa36;
  border-radius: 4px;

  font-weight: 700;
  font-size: 16px;
  line-height: calc(30 / 16);
  letter-spacing: 0.06em;
  color: #22252a;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: #8baa36;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    margin-left: 12px;
  }
  @media screen and (min-width: 1440px) {
    margin: 0 auto;
  }
`;
