import {
  WrapperTextarea,
  TitlePreparation,
  Textarea,
  ErrMessage,
} from './RecipeFormPreparationFields.styled';

const RecipeFormPreparationFields = ({ value, onChange, formErrors }) => {
  return (
    <WrapperTextarea>
      <TitlePreparation>Recipe Preparation</TitlePreparation>
      <Textarea
        name="recipe"
        placeholder="Enter recipe"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {formErrors?.instructions && (
        <ErrMessage>{formErrors?.instructions}</ErrMessage>
      )}
    </WrapperTextarea>
  );
};

export default RecipeFormPreparationFields;
