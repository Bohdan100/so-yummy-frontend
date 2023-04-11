import SearchForm from 'components/SearchForm';
import СhooseYourBreakfast from 'components/Main/СhooseYourBreakfast';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  MainPageBg,
  MainPageH1,
  MainPageText,
  MainPageDiv,
  SpanGr,
} from './MainHero.styled';
import { Container } from 'components/MainContainer/MainContainer.styled';
import { useDesktopCheck } from 'hooks/desktopCheck';

const MainHero = () => {
  const { isTablet, isDesktop } = useDesktopCheck();
  const navigate = useNavigate();

  const perPageItems = () => {
    let perPage;
    if (isDesktop) {
      perPage = 12;
    } else if (isTablet) {
      perPage = 6;
    } else {
      perPage = 6;
    }
    return perPage;
  };

  const handleOnSubmit = (query, type) => {
    if (query === '') {
      toast.error(`You didn't enter anything to search`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    navigate(
      `/search?query=${query}&type=${type}&page=1&perPage=${perPageItems()}`
    );
  };

  return (
    <MainPageBg>
      <Container>
        <MainPageDiv>
          <MainPageH1>
            <SpanGr>So</SpanGr>Yummy
          </MainPageH1>
          <MainPageText>
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </MainPageText>
          <СhooseYourBreakfast />
          <SearchForm styled={'black'} handleOnSubmit={handleOnSubmit} />
        </MainPageDiv>
      </Container>
    </MainPageBg>
  );
};

export default MainHero;