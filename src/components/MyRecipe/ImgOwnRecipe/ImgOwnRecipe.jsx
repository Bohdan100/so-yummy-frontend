import React from 'react';
import { ImgContainer, Image } from './ImgOwnRecipe.styled';

const ImageCard = ({ preview, altText }) => {
  return (
    <ImgContainer>
      <Image src={preview} alt={altText} />
    </ImgContainer>
  );
};

export default ImageCard;
