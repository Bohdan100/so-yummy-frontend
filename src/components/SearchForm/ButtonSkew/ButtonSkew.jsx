import { ButtonSkewStyle } from './ButtonSkew.styled';

const ButtonSkew = ({ type, fn, styled, text, location }) => {
  const onClick = e => {
    if (!fn) return;
    fn(e);
  };
  return (
    <ButtonSkewStyle
      type={type}
      onClick={onClick}
      styled={styled}
      location={location}
    >
      {text}
    </ButtonSkewStyle>
  );
};
export default ButtonSkew;
