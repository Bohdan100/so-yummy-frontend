import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { allTime } from 'data/dataForAddRecipeForm';
import { ReactComponent as Arrow } from '../../../images/icons/chevron-down.svg';
import ImgWithPreview from '../ImgWithPreview';

import {
  InfoWrapper,
  ImgWrapperForError,
  ErrMsgForImg,
  Descriptions,
  WrapperErrMessForTitle,
  Input,
  ErrMessage,
  WrapperErrMessForDescrip,
  WrapperCategory,
  WrapperCookingTime,
  SelectStyled,
  WrapperOption,
  ArrowWrapper,
  SelectContent,
  SelectItem,
} from './RecipeFormDescriptionFields.styled';

import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/Theme/themeSelectors';

const RecipeFormDescriptionFields = ({
  allCategory,
  image: { preview, setPreview },
  name: { title, setTitle },
  descriptionData: { description, setDescription },
  categoryData: { category, setCategory },
  cokingTime: { time, setTime },
  formErrors = {},
}) => {
  const theme = useSelector(selectTheme);
  const [isActiveCategory, setIsActiveCategory] = useState(false);
  const [isActiveTime, setIsActiveTime] = useState(false);
  const inputEl = useRef(null);
  const { t } = useTranslation();

  return (
    <InfoWrapper>
      <ImgWrapperForError>
        <ImgWithPreview imgAdd={preview} setImgAdd={setPreview} />
        {formErrors?.preview && (
          <ErrMsgForImg>{formErrors?.preview}</ErrMsgForImg>
        )}
      </ImgWrapperForError>

      <Descriptions>
        <WrapperErrMessForTitle>
          <Input
            type="text"
            name="title"
            autoComplete="off"
            value={title}
            placeholder={t('recipeFormDescriptionFields.placeholderFirst')}
            onChange={e => setTitle(e.target.value)}
          />
          {formErrors?.title && <ErrMessage>{formErrors?.title}</ErrMessage>}
        </WrapperErrMessForTitle>

        <WrapperErrMessForDescrip>
          <Input
            type="text"
            name="description"
            autoComplete="off"
            placeholder={t('recipeFormDescriptionFields.placeholderSecond')}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          {formErrors?.description && (
            <ErrMessage>{formErrors?.description}</ErrMessage>
          )}
        </WrapperErrMessForDescrip>

        <WrapperCategory>
          <Input
            type="text"
            readOnly="readonly"
            placeholder={t('recipeFormDescriptionFields.placeholderThird')}
            style={{ cursor: 'pointer' }}
          />
          {formErrors?.category && (
            <ErrMessage>{formErrors?.category}</ErrMessage>
          )}

          <SelectStyled
            ref={inputEl}
            onClick={() => setIsActiveCategory(!isActiveCategory)}
          >
            <WrapperOption>{category}</WrapperOption>
            <ArrowWrapper>
              <Arrow width="20px" height="20px" />
            </ArrowWrapper>
          </SelectStyled>
          {isActiveCategory && (
            <SelectContent>
              {allCategory.map((value, index) => (
                <SelectItem
                  key={value + '' + index}
                  onClick={e => {
                    setCategory(value);
                    setIsActiveCategory(false);
                  }}
                  color={
                    value === category && theme === 'light'
                      ? '#8BAA36'
                      : '#000000'
                  }
                >
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          )}
        </WrapperCategory>

        <WrapperCookingTime>
          <Input
            type="text"
            placeholder={t('recipeFormDescriptionFields.placeholderForth')}
            style={{ cursor: 'pointer' }}
          />
          {formErrors?.time && <ErrMessage>{formErrors?.time}</ErrMessage>}

          <SelectStyled
            ref={inputEl}
            onClick={e => setIsActiveTime(!isActiveTime)}
          >
            <WrapperOption>{time}</WrapperOption>
            <ArrowWrapper>
              <Arrow width="20px" height="20px" />
            </ArrowWrapper>
          </SelectStyled>
          {isActiveTime && (
            <SelectContent style={{ width: '90px' }}>
              {allTime.map((value, index) => (
                <SelectItem
                  key={value + '' + index}
                  onClick={() => {
                    setTime(value);
                    setIsActiveTime(false);
                  }}
                  color={
                    value === time && theme === 'light' ? '#8BAA36' : '#000000'
                  }
                >
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          )}
        </WrapperCookingTime>
      </Descriptions>
    </InfoWrapper>
  );
};

export default RecipeFormDescriptionFields;
