import { RecipePageBtnStyle } from './RecipePageBtn.styled';

const RecipePageBtn = ({ text, fn, type }) => {
  const onClick = e => {
    if (!fn) return;
    fn(e);
  };
  return (
    <RecipePageBtnStyle type={type} onClick={onClick}>
      {text}
    </RecipePageBtnStyle>
  );
};

export default RecipePageBtn;
