import PuffLoader from 'react-spinners/PuffLoader';
import { LoaderWrap } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrap>
      <PuffLoader color="#8BAA36" size={85} />
    </LoaderWrap>
  );
};

export default Loader;
