import React from 'react';
import MainContainer from 'components/MainContainer/MainContainer';
import SearchTypeSelector from './SearchBar/SearchTypeSelector/SearchTypeSelector';

const SearchPage = () => {
  return (
    <MainContainer>
      <h2>Search</h2>
      <SearchTypeSelector />
    </MainContainer>
  );
};
