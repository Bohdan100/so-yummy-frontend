import { SkewBtn } from './ButtonSkew.styled';

const ButnSkew = ({ type, fn, text, location }) => {
  const onClick = e => {
    if (!fn) return;
    fn(e);
  };
  return (
    <SkewBtn type={type} onClick={onClick} location={location}>
      {text}
    </SkewBtn>
  );
};

export default ButnSkew;
