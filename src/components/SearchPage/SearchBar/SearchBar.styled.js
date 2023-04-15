import { SearchBlock } from 'components/ReusableComponents/SearchForm/SearchForm.styled';
import styled from 'styled-components';

export const SearchBarCont = styled.div`
  ${SearchBlock} {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    margin-top: 50px;
    @media screen and (min-width: 768px) {
      margin-bottom: 28px;
      margin-top: 40px;
    }
    @media screen and (min-width: 1440px) {
      margin-top: 50px;
    }
  }
`;
