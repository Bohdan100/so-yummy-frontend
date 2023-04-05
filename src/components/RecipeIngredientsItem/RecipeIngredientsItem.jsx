import {
  RecipeItem,
  RecipeItemWrapper,
  ImageWrapper,
  TextContainer,
  NameIngredient,
  WeighIngredient,
  CustomCheckbox,
  PickIconStyled,
  RealCheckbox,
} from './RecipeIngredientsItem.styled';

const RecipeIngredientsItem = ({ image, nameIngredient, weight }) => {
  // пропом отримую інгрідієнти та айді рецепту
  return (
    <RecipeItem>
      <RecipeItemWrapper>
        <ImageWrapper>
          <img src={image} alt={nameIngredient} />
        </ImageWrapper>
        <TextContainer>
          <NameIngredient>{nameIngredient}</NameIngredient>
        </TextContainer>

        <WeighIngredient>{weight}</WeighIngredient>
        <RealCheckbox
          type="checkbox"
          // onChange={}
          // checked={}
        />
        <CustomCheckbox>
          <PickIconStyled />
        </CustomCheckbox>
      </RecipeItemWrapper>
    </RecipeItem>
  );
};

export default RecipeIngredientsItem;
