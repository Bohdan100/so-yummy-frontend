import { useMedia } from 'react-use';
import { useTranslation } from 'react-i18next';

import MainContainer from 'components/MainContainer';
import ReusableTitle from 'components/ReusableComponents/ReusableTitle';
import AddRecipeForm from 'components/AddRecipeForm';
import SocNetworks from 'components/Footer/SocNetworks';
import PopularRecipe from 'components/PopularRecipe';

import {
  MainWrapper,
  FollowUsTitle,
  FollowUsWrapper,
} from './AddRecipePage.styled';

const AddRecipePage = () => {
  const isDesktop = useMedia('(min-width: 1440px)');
  const { t } = useTranslation();

  return (
    <MainContainer>
      <ReusableTitle>{t('addRecipePage.title')}</ReusableTitle>
      <MainWrapper>
        <AddRecipeForm />
        <div>
          {isDesktop && (
            <FollowUsWrapper>
              <FollowUsTitle>{t('addRecipePage.text')}</FollowUsTitle>
              <SocNetworks location={'addRecipePage'} />
            </FollowUsWrapper>
          )}
          <PopularRecipe />
        </div>
      </MainWrapper>
    </MainContainer>
  );
};

export default AddRecipePage;
