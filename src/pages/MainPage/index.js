import { ButtonOthCtgWrap } from 'components/Main/ButtonOthCtg/ButtonOthCtg.styled';
import { ButtonSkew } from 'components/Main/ButtonSkew/ButtonSkew';
import { Container } from 'components/MainContainer/MainContainer';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { СhooseYourBreakfast } from 'components/Main/СhooseYourBreakfast/СhooseYourBreakfast';
import { scrollToTop } from 'constants/scrollUp';





import {
  MainPageBg,
  MainPageDiv,
  MainPageH1,
  MainPageText,
  SpanGr,
} from './MainPage';


        <>
            <MainPageBg>
                    <MainPageDiv>
                        <MainPageH1>
                            <SpanGr>So</SpanGr>Yummy
                        </MainPageH1>
                        <MainPageText>
                            "What to cook?" is not only a recipe app, it is, in fact, <br/> your
                            cookbook. You can add your own recipes to <br/> save them for the
                            future.
                        </MainPageText>
                        <СhooseYourBreakfast />
                        <SearchForm styled={'black'} handleOnSubmit={handleOnSubmit} />
                    </MainPageDiv>
                </MainPageBg>
            <Container>
                <PreviewCategories />
                <ButtonOthCtgWrap>
                    <Link to="/categories/beef" onClick={scrollToTop}>
                        <ButtonSkew
                            type={'button'}
                            fn={onClick}
                            styled={'other'}
                            text={'Other categories'}
                        />
                    </Link>
                </ButtonOthCtgWrap>
            </Container>
        </>






export { default } from './MainPage';





