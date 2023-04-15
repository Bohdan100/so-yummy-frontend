import SearchForm from 'components/ReusableComponents/SearchForm';
import СhooseYourBreakfast from 'components/Main/СhooseYourBreakfast';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  MainPageH1,
  MainPageText,
  MainPageDiv,
  SpanGr,
} from './MainHero.styled';
import { useDesktopCheck } from 'hooks/desktopCheck';
import HeroBg from '../HeroBG/HeroBg.jsx';
import { MainContainerTwo } from 'components/Header/Header.styled';

const MainHero = () => {
  const { isTablet, isDesktop } = useDesktopCheck();
  const navigate = useNavigate();
  const { t } = useTranslation();

  
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
      toast.error(t('mainHero.error'), {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    navigate(
      `/search?query=${query}&type=${type}&page=1&perPage=${perPageItems()}`
    );
  };

  return (
    <>
      <MainContainerTwo>
        <MainPageDiv>
          <MainPageH1>
            <SpanGr>So</SpanGr>Yummy
          </MainPageH1>
          <MainPageText>
            {t('mainHero.description')}
          </MainPageText>
          <СhooseYourBreakfast />
          <SearchForm styled={'black'} handleOnSubmit={handleOnSubmit} />
        </MainPageDiv>
        <HeroBg />
      </MainContainerTwo>
    </>
  );
};

export default MainHero;
