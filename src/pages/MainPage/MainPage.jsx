import MainHero from 'components/Main/MainHero/MainHero';
import MainContainer from 'components/MainContainer/MainContainer';
import PreviewCategories from 'components/PreviewCategories/PreviewCategories';

const MainPage = () => {
  return (
    <MainContainer>
      <MainHero />
      <PreviewCategories />
    </MainContainer>
  );
};

export default MainPage;
