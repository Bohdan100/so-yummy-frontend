import styled from 'styled-components';
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const LoaderWrap = styled.div`
  position: absolute;
  bottom: 50%;
  left: 47%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
