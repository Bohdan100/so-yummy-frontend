import styled from 'styled-components';
import { Field } from 'formik';

export const Error = styled.p`
  color: red;
`;

export const InputContainer = styled.div`
  margin: 0 0 16px 0;
`;

export const SelectIngredienContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 30% 10%;
  row-gap: 20px;
  column-gap: 10px;
`;

export const IngredienControler = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IngredienLenght = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  max-width: 96px;
  height: 28px;
  border: 1px solid rgba(51, 51, 51, 0.3);
  border-radius: 18px;
`;

export const ButtonClickIngredient = styled.button`
  border: none;
  cursor: pointer;
  color: #333333;
  background-color: white;
`;

export const Input = styled(Field)`
  border: none;
  outline: none;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
  height: 48px;
`;

export const SelectInput = styled(Field)`
  border: none;
  outline: none;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
  height: 48px;
`;

export const ListStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
`;
