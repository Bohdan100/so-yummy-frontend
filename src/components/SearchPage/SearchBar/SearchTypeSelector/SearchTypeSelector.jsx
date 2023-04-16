import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectCon, SelectStyled } from './SearchTypeSelector.styled';

const SearchTypeSelector = ({ startType, typeSubmit }) => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState({
    value: startType,
    label: startType,
  });

  const options = [
    { value: 'Title', label: 'Title' },
    { value: 'Ingredients', label: 'Ingredients' },
  ];

  useEffect(() => {
    typeSubmit(selectedOption);
  }, [selectedOption, typeSubmit]);

  useEffect(() => {
    setSelectedOption({ value: startType, label: startType });
  }, [startType]);

  return (
    <SelectCon>
      <span>{t('searchTypeSelector.selector')}</span>
      <SelectStyled
        defaultValue={{
          value: startType,
          label: startType.charAt(0).toUpperCase() + startType.slice(1),
        }}
        onChange={setSelectedOption}
        options={options}
        value={selectedOption}
        isSearchable={false}
        classNamePrefix="react-select"
      />
    </SelectCon>
  );
};

export default SearchTypeSelector;
