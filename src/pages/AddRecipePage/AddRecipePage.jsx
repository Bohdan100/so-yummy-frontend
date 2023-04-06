import { Container } from 'components/MainContainer/MainContainer.styled';

const { AddRecipeForm } = require('components/AddRecipeForm/AddRecipeForm');

const AddRecipePage = () => {
  return (
    <Container>
      <AddRecipeForm />
    </Container>
  );
};

export default AddRecipePage;
