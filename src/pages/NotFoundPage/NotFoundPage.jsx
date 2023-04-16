import { useTranslation } from 'react-i18next';
import Container from 'components/MainContainer';
import {
  NotFoundContainer,
  ImageCont,
  TextNotFound,
} from './NotFoundPage.styled';
import BackgroundDots from 'components/ReusableComponents/BackgroundDots';
import notFoundMob1x from 'images/bgPages/notFoundPage/not_found_mob@1x.png';
import notFoundMob2x from 'images/bgPages/notFoundPage/not_found_mob@2x.png';
import notFoundTablet1x from 'images/bgPages/notFoundPage/not_found_tablet@1x.png';
import notFoundTablet2x from 'images/bgPages/notFoundPage/not_found_tablet@2x.png';
import notFoundDesktop1x from 'images/bgPages/notFoundPage/not_found_desktop@1x.png';
import notFoundDesktop2x from 'images/bgPages/notFoundPage/not_found_desktop@2x.png';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <NotFoundContainer>
      <Container>
        <BackgroundDots />
        <ImageCont>
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={`${notFoundDesktop1x}, ${notFoundDesktop2x} 2x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${notFoundTablet1x}, ${notFoundTablet2x} 2x`}
            />
            <img
              src={notFoundMob1x}
              srcSet={`${notFoundMob1x}, ${notFoundMob2x} 2x`}
              alt="Not Found Page"
            />
          </picture>
        </ImageCont>
        <TextNotFound>
          <h3>{t('notFoundPage.textMain')}</h3>
          <p>{t('notFoundPage.textAddition')}</p>
        </TextNotFound>
      </Container>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
