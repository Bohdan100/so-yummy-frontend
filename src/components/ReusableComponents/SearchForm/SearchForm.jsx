import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchBlock, SearchIn, SearchInput } from './SearchForm.styled';
import ButnSkew from 'components/ButtonSkew';

const SearchForm = ({ handleOnSubmit, type = 'Title', startQuery }) => {
  const [searchValue, setInputValue] = useState(startQuery ?? '');
  const { t } = useTranslation();

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
          placeholder={t('searchForm.btnPlaceholder')}
          onChange={handleInputChange}
        />
        <ButnSkew type="submit" text={t('searchForm.btnText')} />
      </SearchIn>
    </SearchBlock>
  );
};

export default SearchForm;
