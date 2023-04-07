import Container from '../../components/MainContainer/MainContainer';
import ReusableTitle from 'components/ReusableTitle/ReusableTitle';
import { ImageCont, TextNotFound } from './NotFoundPage.styled';
import notFoundDesktop from '../../images/bgPages/notFoundPage/not_found_desktop@1x.png';

const NotFoundPage = () => {
  return (
    <div>
      <Container>
        <ReusableTitle>Not Found Page</ReusableTitle>
        <ImageCont>
          <img src={notFoundDesktop} alt="Error" />
        </ImageCont>
        <TextNotFound>
          <h3>We are sorry,</h3>
          <p>but the page you were looking for can’t be found..</p>
        </TextNotFound>
      </Container>
    </div>
  );
};

export default NotFoundPage;
