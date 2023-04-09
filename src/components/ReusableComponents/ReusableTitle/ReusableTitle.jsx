import BackgroundDots from '../BackgroundDots/BackgroundDots';
import { Title } from './ReusableTitle.styled';

const ReusableTitle = ({ children }) => {
  return (
    <>
      <BackgroundDots />
      <Title>{children}</Title>
    </>
  );
};

export default ReusableTitle;
