import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 24px;
  font-weight: 700;
`;

const MainPageTitle = ({ title }) => {
  return <TitleWrapper>{title}</TitleWrapper>;
};

MainPageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainPageTitle;
