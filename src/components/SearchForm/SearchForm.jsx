import React, { useState } from 'react';
import { SearchBlock, SearchIn, SearchInput } from './SearchForm.styled';
import ButnSkew from 'components/ButtonSkew';

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
          placeholder="Beef"
          onChange={handleInputChange}
        />
        <ButnSkew type="submit" text="Search" />
      </SearchIn>
    </SearchBlock>
  );
};

export default SearchForm;
