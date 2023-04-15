import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2;
  background-color: #8baa3680;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  ${p =>
    p.position === 'absolute' &&
    `position: absolute;
  top: 16px;
  left: 35px;`}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights[1]};
  font-size: 14px;
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.btnTextLight};
`;

export const Flag = styled.div`
  width: 20px;
  height: 20px;
  align-self: center;
`;

export const Button = styled.button`
  margin: 0;
  padding: 4px;
  background-color: transparent;
  border: transparent;
  outline: transparent;
  cursor: pointer;
  transition: ${p => p.theme.transitions.main};
`;
