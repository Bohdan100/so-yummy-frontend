import React from 'react';

import {
  CardWrapper,
  ImageWrapper,
  InfoWrapper,
  Title,
  Text,
} from './FavoriteCard.styled';

// const cookingTime = [
//   { key: 'Cooking time', value: '' },
//   { key: '20 min', value: '20 min' },
//   { key: '30 min', value: '30 min' },
//   { key: '40 min', value: '40 min' },
//   { key: '50 min', value: '50 min' },
//   { key: '60 min', value: '60 min' },
//   { key: '90 min', value: '90 min' },
// ];

const FavoriteCard = props => {
  const { title, preview, description } = props;

  return (
    <CardWrapper>
      <ImageWrapper>
        <img src={preview} alt={title} />
      </ImageWrapper>
      <InfoWrapper>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default FavoriteCard;

// const FavoriteCard = props => {
//   const { title, preview, description } = props;

//   return (
//     <CardWrapper>
//       <ImageWrapper>
//         <img src={preview} alt={title} />
//       </ImageWrapper>
//       <InfoWrapper>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </InfoWrapper>
//     </CardWrapper>
//   );
// };
