import { useState, useRef, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Arrow } from '../../../images/icons/chevron-down.svg';
import { ReactComponent as CloseIcon } from '../../../images/icons/close-20.svg';

import { selectTheme } from 'redux/Theme/themeSelectors';
import { units } from 'data/unitsForAddRecipe';

import {
  IngridientItem,
  WrapperIngredient,
  InputIngredient,
  ArrowWrapper,
  SelectContentIngridients,
  SelectItem,
  WrapperAmount,
  InputAmount,
  DeleteButton,
  ErrMessage,
  WrapperUnit,
  SelectUnit,
  WrapperOptionUnit,
  SelectContentUnits,
  ArrowWrapperUnit,
} from './IngridientField.styled';

const IngridientField = ({
  allIngredients,
  id: idInput,
  dataInput,
  onUpdateIngridient,
  onRemove,
  errorMessage,
}) => {
  const theme = useSelector(selectTheme);
  const inputEl = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isActiveUnitField, setIsActiveUnitField] = useState(false);
  const [titleIngridient, setTitleIngridient] = useState(dataInput.ttl);
  const [amount, setAmount] = useState(dataInput.amount);
  const [unit, setUnit] = useState(dataInput.unit);
  const [filter, setFilter] = useState(() => dataInput?.ttl || '');

  useEffect(() => {
    const onClick = e => {
      inputEl.current.contains(e.target) || setIsActive(!isActive);
    };

    if (isActive) {
      document.addEventListener('click', onClick);
    }
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [isActive]);

  const handleChangeAmount = digits => {
    if (digits.length > 3) {
      return;
    }
    if (digits === '0') {
      setAmount('');
      return;
    }
    setAmount(digits);

    onUpdateIngridient(idInput, {
      amount: digits,
      unit,
    });
  };

  const filteredAllIngridients = useMemo(() => {
    if (!filter) return allIngredients;
    const normalizeNameMeal = filter.toLowerCase();
    return allIngredients.filter(el =>
      el.ttl.toLowerCase().includes(normalizeNameMeal)
    );
  }, [allIngredients, filter]);

  return (
    <IngridientItem key={idInput} ref={inputEl}>
      <WrapperIngredient>
        <InputIngredient
          type="text"
          name="ingridient"
          autoComplete="off"
          placeholder="Start enter ingredient"
          value={filter}
          onChange={e => {
            setFilter(e.target.value);
            setTitleIngridient(e.target.value);
            setIsActive(true);
          }}
        />

        {titleIngridient.length !== 0 &&
          filteredAllIngridients.length !== 0 && (
            <ArrowWrapper onClick={e => setIsActive(!isActive)}>
              <Arrow width="20px" height="20px" />
            </ArrowWrapper>
          )}

        {isActive &&
          titleIngridient.length !== 0 &&
          filteredAllIngridients.length !== 0 && (
            <SelectContentIngridients>
              {filteredAllIngridients.map(({ _id, ttl }) => (
                <SelectItem
                  key={_id}
                  onClick={e => {
                    setFilter(ttl);
                    setTitleIngridient(ttl);
                    setIsActive(false);

                    onUpdateIngridient(idInput, {
                      ttl,
                      id: _id,
                      amount,
                      unit,
                    });
                  }}
                  color={
                    titleIngridient === ttl && theme === 'light'
                      ? '#8BAA36'
                      : '#000000'
                  }
                >
                  {ttl}
                </SelectItem>
              ))}
            </SelectContentIngridients>
          )}
      </WrapperIngredient>

      <WrapperAmount>
        <InputAmount
          type="number"
          name="amount"
          autoComplete="off"
          min="1"
          value={amount}
          onChange={e => handleChangeAmount(e.target.value)}
        />
        <WrapperUnit>
          <>
            <SelectUnit
              ref={inputEl}
              onClick={e => setIsActiveUnitField(!isActiveUnitField)}
            >
              <WrapperOptionUnit>{unit}</WrapperOptionUnit>
              <ArrowWrapperUnit>
                <Arrow width="20px" height="20px" />
              </ArrowWrapperUnit>
            </SelectUnit>
            {isActiveUnitField && (
              <SelectContentUnits>
                {units.map((value, index) => (
                  <SelectItem
                    key={value + '' + index}
                    onClick={e => {
                      setUnit(value);
                      setIsActive(false);
                      onUpdateIngridient(idInput, {
                        amount,
                        unit: value,
                      });
                    }}
                  >
                    {value}
                  </SelectItem>
                ))}
              </SelectContentUnits>
            )}
          </>
        </WrapperUnit>
      </WrapperAmount>

      <DeleteButton
        type="button"
        onClick={() => {
          onRemove(idInput);
        }}
      >
        <CloseIcon />
      </DeleteButton>
      {errorMessage && <ErrMessage>{errorMessage}</ErrMessage>}
    </IngridientItem>
  );
};

export default IngridientField;
