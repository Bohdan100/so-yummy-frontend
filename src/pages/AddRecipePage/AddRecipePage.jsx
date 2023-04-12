import { useMedia } from 'react-use';

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
  return (
    <MainContainer>
      <ReusableTitle>Add recipe</ReusableTitle>
      <MainWrapper>
        <AddRecipeForm />
        <div>
          {isDesktop && (
            <FollowUsWrapper>
              <FollowUsTitle>Follow us</FollowUsTitle>
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
