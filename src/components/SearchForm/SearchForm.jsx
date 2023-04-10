import ButtonSkew from 'components/SearchForm/ButtonSkew';
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
        <ButtonSkew type="submit" text="Search" styled={styled}></ButtonSkew>
      </SearchIn>
    </SearchBlock>
  );
};

export default SearchForm;
