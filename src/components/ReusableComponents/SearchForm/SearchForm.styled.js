import styled from 'styled-components';
export const SearchBlock = styled.div`
  width: 295px;
  height: 52px;
  background-color: ${p => p.theme.colors.mainSearchInput};
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  margin: 0 24px 83px;
  border: ${p => p.theme.borders.mainSearchInput};
  background-color: ${p => p.theme.colors.mainBtnInput};
  color: ${p => p.theme.colors.disabledGrey};
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  position: relative;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 362px;
    height: 59px;
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 195px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 510px;
    height: 71px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const SearchIn = styled.form`
  display: flex;
  justify-content: flex-end;
  border-radius: 30px, 80px;
  height: 100%;
  width: 295px;

  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 362px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 510px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 80px;
  border: none;
  background-color: ${p => p.theme.colors.mainBtnInput};
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  padding-left: 32px;
  color: ${p => p.theme.colors.disabledGrey};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &:hover {
    border: none;
    outline: none;
  }
  &:active {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    font-family: ${p => p.theme.fonts.main};
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    color: ${p => p.theme.colors.disabledGrey};
  }
`;
