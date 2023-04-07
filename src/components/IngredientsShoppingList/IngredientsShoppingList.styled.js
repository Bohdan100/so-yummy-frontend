import styled from 'styled-components';

export const StyledIngredientsShoppingList = styled.div`
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    color: #333333;
  }
`;

export const IngredientItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const IngredientImage = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 8px;
  margin-right: 12px;
`;

export const IngredientQuantity = styled.span`
  margin-right: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #828282;
`;

export const IngredientName = styled.span`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #333333;
`;

export const DeleteButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #ffffff;
  background-color: #eb5757;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #cc4c4c;
  }
`;
