import styled from 'styled-components';
import { Field } from 'formik';

export const Error = styled.p`
  color: red;
`;

export const InputContainer = styled.div`
  margin: 16px 0;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 18px;
`;

export const SelectTitle = styled.span`
  width: 80%;
`;

export const SelectStyled = styled.select`
  border: none;
  outline: none;
  background-color: transparent;
`;

// export const Select = styled(Field)`
//   border: none;
//   outline: none;
//   background-color: transparent;
// `;

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

export const SelectInputIngredient = styled(Field)`
  border: none;
  outline: none;
`;

export const ListStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 44px 0 16px 0;
`;

export const Area = styled(Field)`
  padding: 16px 22px;
  width: 505px;
  height: 224px;
  background: #d9d9d9;
  border-radius: 6px;
  resize: none;
  outline: none;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height, or 100% */

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: #3e4462;
`;

export const InputContainerFile = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: #8baa36;
  border-radius: 8px;
`;

export const ButtonFile = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
`;
