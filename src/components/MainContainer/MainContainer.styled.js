import styled from 'styled-components';

export const MainContainerWrapper = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 10px 25px rgba(18, 18, 18, 0.1);
  padding: 30px;
  margin: 50px auto;
  max-width: 1100px;
  min-height: 600px;

  @media screen and (max-width: 768px) {
    padding: 20px;
    margin: 20px auto;
  }

  @media screen and (max-width: 480px) {
    padding: 15px;
    margin: 10px auto;
  }
`;
