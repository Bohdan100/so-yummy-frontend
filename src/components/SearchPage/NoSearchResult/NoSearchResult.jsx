import searchMob1x from '../../../images/bgPages/searchPage/search_page_mob@1x.png';
import searchMob2x from '../../../images/bgPages/searchPage/search_page_mob@2x.png';
import searchTablet1x from '../../../images/bgPages/searchPage/search_page_tablet@1x.png';
import searchTablet2x from '../../../images/bgPages/searchPage/search_page_tablet@2x.png';
import searchDesktop1x from '../../../images/bgPages/searchPage/search_page_desktop@1x.png';
import searchDesktop2x from '../../../images/bgPages/searchPage/search_page_desktop@2x.png';
import {
  SearchWrap,
  SearchResultText,
  ImgSearchResult,
} from './NoSearchResult.styled';

export const NoSearchResult = () => {
  return (
    <SearchWrap>
      <ImgSearchResult>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${searchDesktop1x}, ${searchDesktop2x} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${searchTablet1x}, ${searchTablet2x} 2x`}
          />
          <img
            src={searchMob1x}
            srcSet={`${searchMob1x}, ${searchMob2x} 2x`}
            alt="No search result"
          />
        </picture>
      </ImgSearchResult>
      <SearchResultText>Try looking for something else..</SearchResultText>
    </SearchWrap>
  );
};
