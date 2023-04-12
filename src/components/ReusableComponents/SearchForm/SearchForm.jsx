import ButnSkew from 'components/ButtonSkew';
import React, { useState } from 'react';
import { SearchBlock, SearchIn, SearchInput } from './SearchForm.styled';

const SearchForm = ({ handleOnSubmit, type = 'Title', startQuery }) => {
  const [searchValue, setInputValue] = useState(startQuery ?? '');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleOnSubmit(searchValue, type);
  }

  return (
    <SearchBlock>
      <SearchIn onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={searchValue}
          placeholder="Enter search"
          onChange={handleInputChange}
        />
        <ButnSkew type="submit" text="Search" />
      </SearchIn>
    </SearchBlock>
  );
};

export default SearchForm;
