import Mob1 from '../../images/bgPages/searchPage/search_page_mob@1x.png';
import Mob2 from '../../images/bgPages/searchPage/search_page_mob@2x.png';
import Tablet1 from '../../images/bgPages/searchPage/search_page_tablet@1x.png';
import Tablet2 from '../../images/bgPages/searchPage/search_page_tablet@2x.png';
import Desktop1 from '../../images/bgPages/searchPage/search_page_desktop@1x.png';
import Desktop2 from '../../images/bgPages/searchPage/search_page_desktop@2x.png';

import { Wrapper, ImgWrapper, Text } from './WrapText.styled';

export const WrapText = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${Desktop1}, ${Desktop2} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${Tablet1}, ${Tablet2} 2x`}
          />
          <img src={Mob1} srcSet={`${Mob1}, ${Mob2} 2x`} alt="no recipes" />
        </picture>
      </ImgWrapper>
      <Text>
        You currently don't have any own recipes added. Let's add some♥
      </Text>
    </Wrapper>
  );
};
