import SearchForm from 'components/SearchForm';
import СhooseYourBreakfast from 'components/Main/СhooseYourBreakfast';

import {
  MainPageBg,
  MainPageH1,
  MainPageText,
  MainPageDiv,
  SpanGr,
} from './MainHero.styled';

const MainHero = () => {
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
        <SearchForm styled={'black'} />
      </MainPageDiv>
    </MainPageBg>
  );
};

export default MainHero;
