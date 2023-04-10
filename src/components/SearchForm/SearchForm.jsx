import React, { useState } from 'react';
import { SearchBlock, SearchIn, SearchInput } from './SearchForm.styled';

const SearchForm = ({ handleOnSubmit, type = 'title', styled, startQuery }) => {
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
          onChange={handleInputChange}
        />
        <button type="submit" text="Search"></button>
      </SearchIn>
    </SearchBlock>
  );
};

export default SearchForm;
