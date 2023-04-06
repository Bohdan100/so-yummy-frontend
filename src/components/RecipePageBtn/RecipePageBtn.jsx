import { RecipePageBtnStyle } from './RecipePageBtn.styled';

const RecipePageBtn = ({ text, fn }) => {
  const onClick = e => {
    if (!fn) return;
    fn(e);
  };
  return (
    <RecipePageBtnStyle type="button" onClick={onClick}>
      {text}
    </RecipePageBtnStyle>
  );
};

export default RecipePageBtn;
