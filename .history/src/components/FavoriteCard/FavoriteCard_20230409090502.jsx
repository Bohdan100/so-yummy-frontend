import React from 'react';
import { Link } from 'react-router-dom';
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
  IconSpan,
  TextWrapper,
  Box,
  RecipePageBtn,
} from './FavoriteCard.styled';

const FavoriteCard = ({ id, title, preview, description, time, onDelete }) => {
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
              <IconSpan>
                <DeleteIconStyled />
              </IconSpan>
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
            <div>
              <Title>{title}</Title>
            </div>
            <DeleteButton onClick={onDelete}>
              <IconSpan>
                <DeleteIconStyled />
              </IconSpan>
            </DeleteButton>
          </TitleBox>
          <Box>
            <TextWrapper>
              <Text>{description}</Text>
            </TextWrapper>
            <CookingWrapper>
              <Time>{time} min</Time>
              <Link to={`/recipe/${id}`}>
                <RecipePageBtn>See recipie</RecipePageBtn>
              </Link>
            </CookingWrapper>
          </Box>
        </InfoWrapper>
      </CardWrapper>
    );
  }
};

export default FavoriteCard;
