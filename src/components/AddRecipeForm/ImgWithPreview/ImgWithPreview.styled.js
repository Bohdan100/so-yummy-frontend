import styled from 'styled-components';
import { ReactComponent as Icon } from '../../../images/icons/input-img.svg';

export const WrapperImg = styled.div`
  position: relative;
  background-color: ${p => p.theme.colors.mainAccent};
  border: transparent;
  border-radius: ${p => p.theme.radii.image};
  overflow: hidden;
  width: 279px;
  height: 268px;

  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 357px;
    height: 344px;
  }
`;

export const InputImg = styled.input`
  width: 279px;
  height: 268px;
  opacity: 0;

  @media screen and (min-width: 1440px) {
    width: 357px;
    height: 344px;
  }
`;

export const PhotoIconStyled = styled(Icon)`
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const ShowImg = styled.img`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  pointer-events: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
