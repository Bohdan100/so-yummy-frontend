import {
  PreparationWrapper,
  InstrWrapper,
  InstrTitle,
  InstrList,
  InstrText,
  InstrWrapperImg,
} from './RecipePreparation.styled';

import { nanoid } from 'nanoid';

const RecipePreparation = ({ image, instructions }) => {
  const items = instructions
    .split('\r\n')
    .filter(elem => {
      if (!elem) return false;
      if (!isNaN(elem)) return false;
      if (elem.toLowerCase().includes('step')) return false;
      return true;
    })
    .map((item, index) => {
      let slicedItem = item;
      for (let i = 0; i < 2; i++) {
        if (!isNaN(slicedItem[i]) || slicedItem[i] === '.') {
          slicedItem = slicedItem.slice(i + 1);
        }
      }
      return (
        <InstrText key={nanoid()}>
          <span>{index + 1}</span>
          <p>{slicedItem}</p>
        </InstrText>
      );
    });

  return (
    <PreparationWrapper>
      <InstrWrapper>
        <InstrTitle>Recipe Preparation</InstrTitle>
        <InstrList>{items}</InstrList>
      </InstrWrapper>

      <InstrWrapperImg>
        <img src={image} alt={''} />
      </InstrWrapperImg>
    </PreparationWrapper>
  );
};

export default RecipePreparation;
