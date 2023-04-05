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

const MyRecipeItem = ({
  // category,
  description,
  preview,
  time,
  title,
  id,
  //   handelDelete,
}) => {
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
              <DeleteBtn>
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
