import {
  Item,
  MainBox,
  WrapperBox,
  TitleRecipe,
  DeleteBtn,
  AboutRecipe,
  Time,
  BtnSee,
  WrapperUp,
  BtnBox,
  Container,
  ImageContainer,
  Image,
  // IconBtn,
} from './MyRecipeItem.styled';

import { ReactComponent as BtnIconDelete } from '../../../images/icons/btn-delete-recipe.svg';
import { useDispatch } from 'react-redux';
import { deleteOwnRecipe } from 'redux/OwnRecipes/OwnRecipesOperations';

const MyRecipeItem = ({ description, preview, time, title, id }) => {
  const dispatch = useDispatch();
  // const handelDelete = recipeId => {
  //   dispatch(deleteOwnRecipe(recipeId));
  // };
  return (
    <Item key={id}>
      <MainBox>
        <ImageContainer>
          <Image src={preview} alt={title} />
        </ImageContainer>
        <Container>
          <WrapperBox>
            <TitleRecipe>{title}</TitleRecipe>
            <BtnBox>
              <DeleteBtn
                type="button"
                onClick={() => dispatch(deleteOwnRecipe(id))}
              >
                <BtnIconDelete />
              </DeleteBtn>
            </BtnBox>

            <AboutRecipe>{description}</AboutRecipe>
          </WrapperBox>

          <WrapperUp>
            <Time>{time}</Time>
            <BtnSee>See recipe</BtnSee>
          </WrapperUp>
        </Container>
      </MainBox>
    </Item>
  );
};

export default MyRecipeItem;
