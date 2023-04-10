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

const MainHero = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (query, type) => {
    if (query === '') {
      toast.error(`You didn't enter anything to search`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    navigate(`/search?query=${query}&type=${type}`);
  };

  return (
    <MainPageBg>
      <MainPageDiv>
        <MainPageH1>
          <SpanGr>So</SpanGr>Yummy
        </MainPageH1>
        <MainPageText>
          "What to cook?" is not only a recipe app, it is, in fact, <br /> your
          cookbook. You can add your own recipes to <br /> save them for the
          future.
        </MainPageText>
        <СhooseYourBreakfast />
        <SearchForm styled={'black'} handleOnSubmit={handleOnSubmit} />
      </MainPageDiv>
    </MainPageBg>
  );
};

export default MainHero;
