import { SkewBtn } from './ButtonSkew.styled';

const ButnSkew = ({ type, fn, text, location, styled }) => {
  const onClick = e => {
    if (!fn) return;
    fn(e);
  };
  return (
    <SkewBtn type={type} onClick={onClick} location={location} styled={styled}>
      {text}
    </SkewBtn>
  );
};

export default ButnSkew;
