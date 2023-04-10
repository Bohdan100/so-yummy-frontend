import { SelectCon, SelectStyled } from './SearchTypeSelector.styled';
import { useEffect, useState } from 'react';

const SearchTypeSelector = ({ startType, typeSubmit }) => {
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

  return (
    <SelectCon>
      <span>Search by:</span>
      <SelectStyled
        defaultValue={{
          value: startType,
          label: startType.charAt(0).toUpperCase() + startType.slice(1),
        }}
        onChange={setSelectedOption}
        options={options}
        isSearchable={false}
        classNamePrefix="react-select"
      />
    </SelectCon>
  );
};

export default SearchTypeSelector;
