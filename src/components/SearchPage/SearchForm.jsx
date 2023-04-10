// import { ButtonSkew } from 'components/ButtonSkew/ButtonSkew';
import React, { useState } from 'react';
// import { SearchBlock, SearchIn, SearchInput } from './SearchForm.styled';

export const SearchForm = ({ onSubmit, type, startQuery }) => {
  const [searchValue, setInputValue] = useState(startQuery ?? '');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(searchValue, type);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please type here, what you are looking for"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button type="submit" text="Search"></button>
      </form>
    </div>
  );
};
