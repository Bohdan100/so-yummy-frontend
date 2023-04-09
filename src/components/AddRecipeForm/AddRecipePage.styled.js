import styled from 'styled-components';
import { Field } from 'formik';
import { ReactComponent as CloseIcon } from '../../images/icons/close-20.svg';
import { ReactComponent as PhotoIcon } from '../../images/icons/photo.svg';

export const Error = styled.p`
  color: red;
`;

export const FirstTitle = styled.h1`
  margin-bottom: 72px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  /* identical to box height, or 100% */

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: #001833;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: #3e4462;
`;

export const InputContainerFile = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 276px;
  height: 268px;
`;

export const ButtonFile = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #8baa36;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const IconFile = styled(PhotoIcon)`
  margin-right: 5px;
  display: inline-block;
  width: 100%;
  height: 100%;
`;

export const InputContainer = styled.div`
  margin: 16px 0;
`;

export const Input = styled(Field)`
  border: none;
  outline: none;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
  height: 48px;
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
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #000000;
`;

export const SelectIngredienContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 25% 25% 5%;
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
  background-color: transparent;
`;

export const ListStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
`;

export const CloseIconStyled = styled(CloseIcon)`
  margin-right: 5px;
  stroke: black;
  display: inline-block;
  width: 14px;
  height: 14px;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 44px 0 16px 0;
`;

export const Area = styled(Field)`
  padding: 16px 22px;
  width: 100%;
  height: 154px;
  background: #d9d9d9;
  border-radius: 6px;
  resize: none;
  outline: none;
`;
