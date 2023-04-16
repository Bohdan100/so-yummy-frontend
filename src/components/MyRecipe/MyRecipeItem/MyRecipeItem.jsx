import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

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
  Image,
  IconBtn,
} from './MyRecipeItem.styled';
import { useDispatch } from 'react-redux';
import { deleteOwnRecipe } from 'redux/OwnRecipes/OwnRecipesOperations';

const MyRecipeItem = ({ description, preview, time, title, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleChange = id => {
    navigate(`/recipes/${id}`);
  };
  return (
    <Item key={id}>
      <MainBox>
        <Image src={preview} alt={title} />
        <Container>
          <WrapperBox>
            <TitleRecipe>{title}</TitleRecipe>
            <BtnBox>
              <DeleteBtn
                type="button"
                onClick={() =>
                  dispatch(
                    deleteOwnRecipe(id),
                    toast.success(t('myRecipeItem.success'))
                  )
                }
              >
                <IconBtn />
              </DeleteBtn>
            </BtnBox>
            <AboutRecipe>{description}</AboutRecipe>
          </WrapperBox>

          <WrapperUp>
            <Time>
              {time} {t('myRecipeItem.time')}
            </Time>
            <BtnSee onClick={() => handleChange(id)}>
              {t('myRecipeItem.btn')}
            </BtnSee>
          </WrapperUp>
        </Container>
      </MainBox>
    </Item>
  );
};

export default MyRecipeItem;
