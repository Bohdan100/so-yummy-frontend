import PuffLoader from 'react-spinners/PuffLoader';
import { LoaderWrap, Backdrop } from './Loader.styled';

const Loader = () => {
  return (
    <Backdrop>
      <LoaderWrap>
        <PuffLoader color="#8BAA36" size={85} />
      </LoaderWrap>
    </Backdrop>
  );
};

export default Loader;
