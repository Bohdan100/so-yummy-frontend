import { RecipePageBtnStyle } from './RecipePageBtn.styled';

const RecipePageBtn = ({ text, styled, fn }) => {
  const onClick = e => {
    if (!fn) return;
    fn(e);
  };
  return (
    <RecipePageBtnStyle type="button" onClick={onClick} styled={styled}>
      {text}
    </RecipePageBtnStyle>
  );
};

export default RecipePageBtn;
