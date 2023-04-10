import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
// import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/Theme/themeSelectors';
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
  TextWrapper,
  Box,
  RecipePageBtn,
} from './FavoriteCard.styled';

const FavoriteCard = ({ id, title, preview, description, time, onDelete }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const theme = useSelector(selectTheme);
  if (isMobile) {
    return (
      <Link to={`/recipes/${id}`}>
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
      </Link>
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
              <DeleteIconStyled
                stroke={theme === 'light' ? '#22252A' : '#FAFAFA'}
              />
            </DeleteButton>
          </TitleBox>
          <Box>
            <TextWrapper>
              <Text>{description}</Text>
            </TextWrapper>
            <CookingWrapper>
              <Time>{time} min</Time>
              <Link to={`/recipes/${id}`}>
                <RecipePageBtn>See recipe</RecipePageBtn>
              </Link>
            </CookingWrapper>
          </Box>
        </InfoWrapper>
      </CardWrapper>
    );
  }
};

export default FavoriteCard;
