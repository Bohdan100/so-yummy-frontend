import styled from 'styled-components';

export const SocNetworksWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0;
  padding: 0;
`;

export const SocNetworksList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const SocNetwoerksItem = styled.li`
  margin-right: 18px;

  :not(:last-child) {
    margin-right: 0;
  }
`;

export const SocNetworkLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
