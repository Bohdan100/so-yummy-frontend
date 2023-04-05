import styled from 'styled-components';

export const PreparationWrapper = styled.div`
  margin-bottom: 100px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 200px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    display: flex;
    gap: 107px;
  }
`;

export const InstrWrapper = styled.div`
  margin-bottom: 40px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 53px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 469px;
    margin-bottom: 0;
  }
`;

export const InstrTitle = styled.title`
  display: block;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.secondaryDark};
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    letter-spacing: -0.24px;
  }
`;

export const InstrList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  gap: 14px;
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    gap: 18px;
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const InstrText = styled.li`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: flex-start;
  gap: 14px;
  & span {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 21px;
    height: 21px;
    padding: 2px 7px 1px;
    font-weight: ${p => p.theme.fontWeights[2]};
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
    background: ${p => p.theme.colors.mainAccent};
    border-radius: 100px;
    flex: none;
    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      padding: 0.5px 7px 2.5px;
      font-size: 14px;
      line-height: 21px;
    }
  }
  & p {
    padding-top: 2px;
    color: ${({ theme }) => theme.colors.mainBlack};
    width: 311px;
    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      width: 660px;
    }
    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      width: 433px;
    }
  }
`;

export const InstrWrapperImg = styled.div`
  & img {
    border-radius: 8px;
    width: 100%;
    height: 219px;
    object-fit: cover;
    @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
      height: 332px;
    }
    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      width: 664px;
    }
  }
`;
