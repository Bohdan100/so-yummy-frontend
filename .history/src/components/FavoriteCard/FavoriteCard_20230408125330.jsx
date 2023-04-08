import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  CardWrapper,
  ImageWrapper,
  InfoWrapper,
  Title,
  Text,
  Img,
  CookingWrapper,
  Time,
  DeleteIconStyled,
  DeleteButton,
  TitleBox,
} from './FavoriteCard.styled';
import RecipePageBtn from 'components/RecipePageBtn/RecipePageBtn';

const FavoriteCard = ({ title, preview, description, time, onDelete }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (isMobile) {
    return (
      <CardWrapper>
        <ImageWrapper>
          <Img src={preview} alt={title} />
        </ImageWrapper>
        <InfoWrapper>
          <Title>{title}</Title>
          <Text>{description}</Text>
          <CookingWrapper>
            <Time>{time} min</Time>
            <DeleteButton onClick={onDelete}>
              <DeleteIconStyled />
            </DeleteButton>
          </CookingWrapper>
        </InfoWrapper>
      </CardWrapper>
    );
  } else {
    return (
      <CardWrapper>
        <ImageWrapper>
          <Img src={preview} alt={title} />
        </ImageWrapper>
        <InfoWrapper>
          <TitleBox>
            <Title>{title}</Title>
            <DeleteButton onClick={onDelete}>
              <DeleteIconStyled />
            </DeleteButton>
          </TitleBox>
          <Text>{description}</Text>
          <CookingWrapper>
            <Time>{time} min</Time>
            <RecipePageBtn>See recipie</RecipePageBtn>
          </CookingWrapper>
        </InfoWrapper>
      </CardWrapper>
    );
  }
};

export default FavoriteCard;
