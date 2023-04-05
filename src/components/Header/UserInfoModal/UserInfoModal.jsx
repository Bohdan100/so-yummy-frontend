// TODO: добавить в initialState name из редакса и аватарку
import { useState } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import getColor from 'helpers/getColor';
import sprite from '../../../images/icons/sprite.svg';
import { ReactComponent as CrossIcon } from '../../../images/icons/close-20.svg';
import { ReactComponent as DefaultAvatar } from '../../../images/icons/user-40.svg';
import { ReactComponent as EditIcon } from '../../../images/icons/edit-01.svg';

import {
  UserInfoWrapper,
  CloseBtn,
  FormStyled,
  UserAvatarWrapper,
  UserImgWrapper,
  InputButtonWrapper,
  NameLabel,
  NameInput,
  UserIconStyled,
  EditBtn,
  SubmitBtn,
  FlagForInput,
  ErrorMessage,
} from './UserInfoModal.styled';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const validationSchema = Yup.object().shape({
  avatar: Yup.mixed()
    .nullable()
    .test('type', 'Only PNG, JPEG and JPG formats are supported', value => {
      return !value || (value && SUPPORTED_FORMATS.includes(value?.type));
    })
    .test('size', 'The image must be less than 2 MB', value => {
      return !value || (value && value.size <= 2000000);
    }),
  name: Yup.string()
    .trim()
    .matches(/^[a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ1-9]+$/, {
      message: 'Special symbols are not allowed',
    })
    .min(1, 'Your name must be 1 character at least')
    .max(16, '16 characters max'),
});

const UserInfoModal = ({ isShown, closeUserInfoModal }) => {
  // TODO: взять из редакса
  //   const dispatch = useDispatch();
  //   const userAvatar = useSelector(getAvatar);
  const [pathToUserAvatar, setPathToUserAvatar] = useState('');

  return (
    <UserInfoWrapper isShown={isShown}>
      <CloseBtn type="button" onClick={closeUserInfoModal}>
        <CrossIcon />
      </CloseBtn>
      <Formik
        initialValues={{
          avatar: '',
          name: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          //   handleSubmit(values);
          //   actions.setSubmitting(false);
          //   actions.resetForm();
        }}
      >
        {props => (
          <FormStyled onSubmit={props.handleSubmit}>
            <UserAvatarWrapper>
              <label htmlFor="avatar">
                {pathToUserAvatar ? (
                  <UserImgWrapper>
                    <img src={pathToUserAvatar} alt="user-avatar" />
                  </UserImgWrapper>
                ) : (
                  <UserImgWrapper>
                    <DefaultAvatar />
                  </UserImgWrapper>
                )}
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                onBlur={() => {
                  props.setTouched({
                    avatar: true,
                  });
                }}
                onChange={event => {
                  if (event.target.files[0]) {
                    if (
                      SUPPORTED_FORMATS.includes(event.target.files[0].type)
                    ) {
                      setPathToUserAvatar(
                        window.URL.createObjectURL(event.target.files[0])
                      );
                      props.setFieldValue('avatar', event.target.files[0]);
                    }
                    props.setFieldValue('avatar', event.target.files[0]);
                  }
                }}
              />
            </UserAvatarWrapper>
            {props.errors.avatar && props.touched.avatar ? (
              <ErrorMessage location="file">{props.errors.avatar}</ErrorMessage>
            ) : null}

            <InputButtonWrapper>
              <NameLabel htmlFor="name" id="labelName">
                <NameInput
                  type="text"
                  name="name"
                  id="name"
                  onBlur={() => {
                    props.setTouched({
                      name: true,
                    });
                  }}
                  onChange={event => {
                    props.setTouched({
                      name: true,
                    });
                    props.setFieldValue('name', event.target.value);
                  }}
                  color={getColor(
                    props.errors.name,
                    props.values.name,
                    '#C4C4C4'
                  )}
                />
                <UserIconStyled
                  stroke={getColor(
                    props.errors.name,
                    props.values.name,
                    '#C4C4C4'
                  )}
                />

                {props.touched.name && props.values.name ? (
                  <FlagForInput>
                    <use
                      href={`${sprite}${getColor(
                        props.errors.name,
                        props.values.name
                      )}`}
                    ></use>
                  </FlagForInput>
                ) : (
                  props.values.name && (
                    <EditBtn
                      type="button"
                      onClick={() => props.setFieldValue('name', '')}
                    >
                      <EditIcon />
                    </EditBtn>
                  )
                )}
              </NameLabel>
              {props.errors.name && props.touched.name ? (
                <ErrorMessage>{props.errors.name}</ErrorMessage>
              ) : null}
              <SubmitBtn
                type="submit"
                disabled={
                  !(
                    (props.touched.name &&
                      props.values.name &&
                      !props.errors.name) ||
                    (props.touched.picture &&
                      props.values.picture &&
                      !props.errors.picture)
                  )
                }
              >
                Save changes
              </SubmitBtn>
            </InputButtonWrapper>
          </FormStyled>
        )}
      </Formik>
    </UserInfoWrapper>
  );
};

export default UserInfoModal;
