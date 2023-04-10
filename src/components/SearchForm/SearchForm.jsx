import ButnSkew from 'components/ButtonSkew/ButtonSkew';
import React, { useState } from 'react';
import { SearchBlock, SearchIn, SearchInput } from './SearchForm.styled';

const SearchForm = ({ handleOnSubmit, type = 'Title', styled, startQuery }) => {
  const [searchValue, setInputValue] = useState(startQuery ?? '');
  console.log(styled);
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
        <ButnSkew type="submit" text="Search" styled={styled}></ButnSkew>
      </SearchIn>
    </SearchBlock>
  );
};

export default SearchForm;
