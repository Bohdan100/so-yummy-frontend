import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

import { ReactComponent as DecreaseIcon } from '../../../images/icons/decrease.svg';
import { ReactComponent as IncreaseIcon } from '../../../images/icons/increase.svg';

import IngridientField from '../IngridientField';

import {
  IngridientsFieldsWrapper,
  TitleWrapper,
  Title,
  BtnsWrapper,
  BtnDecrease,
  BtnIncrease,
  AmountIngridienst,
  WrapperTextErr,
  TextNotify,
  ErrMessage,
} from './RecipeFormIngredientsFields.styled';

const RecipeFormIngredientsFields = ({
  ingredients = [],
  setIngredients,
  onUpdateIngridient,
  onDeleteIngridient,
  allIngredients = [],
  formErrors = {},
}) => {
  const { t } = useTranslation();

  return (
    <IngridientsFieldsWrapper>
      <TitleWrapper>
        <Title>{t('recipeFormIngredientsFields.title')}</Title>
        <BtnsWrapper>
          <BtnDecrease
            type="button"
            disabled={ingredients.length === 0}
            onClick={() => {
              if (ingredients.length === 0) {
                return;
              }
              setIngredients(ingredients.slice(0, ingredients.length - 1));
            }}
          >
            <DecreaseIcon width="14px" height="14px" />
          </BtnDecrease>

          <AmountIngridienst>{ingredients.length}</AmountIngridienst>

          <BtnIncrease
            type="button"
            disabled={ingredients.length === 20}
            onClick={() => {
              if (ingredients.length === 20) {
                return;
              }
              const idInput = uuidv4();
              const newData = {
                idInput,
                id: '',
                amount: '',
                ttl: '',
                unit: '',
              };
              const updateIngredients = [...ingredients, newData];
              setIngredients(updateIngredients);
            }}
          >
            <IncreaseIcon width="14px" height="14px" />
          </BtnIncrease>
        </BtnsWrapper>
      </TitleWrapper>

      <WrapperTextErr>
        {ingredients.length === 0 && (
          <TextNotify>{t('recipeFormIngredientsFields.textNotify')}</TextNotify>
        )}
        {ingredients.length === 0 && formErrors?.ingredients && (
          <ErrMessage>{formErrors.ingredients}</ErrMessage>
        )}
      </WrapperTextErr>

      {ingredients.length > 0 && (
        <ul>
          {ingredients.map((el, index) => (
            <IngridientField
              key={el.idInput}
              allIngredients={allIngredients}
              id={el.idInput}
              dataInput={el}
              onUpdateIngridient={onUpdateIngridient}
              onRemove={onDeleteIngridient}
              errorMessage={
                formErrors?.ingredients ? formErrors.ingredients[index] : ''
              }
            />
          ))}
        </ul>
      )}
    </IngridientsFieldsWrapper>
  );
};

export default RecipeFormIngredientsFields;
