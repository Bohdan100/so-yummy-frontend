import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { Formik } from 'formik';
import { updateUser } from 'redux/Auth/authOperations';

import {
  updateUserValidationSchema,
  SUPPORTED_FORMATS,
} from '../../../helpers';

import { ReactComponent as CrossIcon } from '../../../images/icons/close-20.svg';
import { ReactComponent as DefaultAvatar } from '../../../images/icons/user-40.svg';
import { ReactComponent as EditIcon } from '../../../images/icons/edit-01.svg';

import {
  ModalWrapper,
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
  ErrorMessage,
} from './UserInfoModal.styled';

const UserInfoModal = ({ isShown, closeUserInfoModal }) => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [pathToUserAvatar, setPathToUserAvatar] = useState(user.avatar);

  const handleSubmit = values => {
    const formData = new FormData();

    if (values.avatar === '') {
      values.avatar = user.avatar;
    }
    formData.append('name', values.name.trim());
    formData.append('avatar', values.avatar);

    dispatch(updateUser(formData));
    closeUserInfoModal();
  };

  return (
    <ModalWrapper isShown={isShown}>
      <CloseBtn type="button" onClick={closeUserInfoModal}>
        <CrossIcon />
      </CloseBtn>

      <Formik
        initialValues={{
          avatar: '',
          name: user.name,
        }}
        validationSchema={updateUserValidationSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.setSubmitting(false);
          actions.resetForm();
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
                  } else {
                    setPathToUserAvatar(user.avatar);
                  }
                }}
              />
            </UserAvatarWrapper>
            {props.errors.avatar && (
              <ErrorMessage location="file">{props.errors.avatar}</ErrorMessage>
            )}

            <InputButtonWrapper>
              <NameLabel htmlFor="name" id="labelName">
                <NameInput
                  type="text"
                  name="name"
                  id="name"
                  value={props.values.name}
                  border={
                    props.touched.name && props.errors.name
                      ? '1px solid #E74A3B'
                      : props.touched.name && props.isValid
                      ? '1px solid #3CBC81'
                      : '1px solid #23262a'
                  }
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
                />
                <UserIconStyled
                  stroke={
                    props.touched.name && props.errors.name
                      ? '#E74A3B'
                      : props.touched.name && props.isValid
                      ? '#3CBC81'
                      : '#23262a'
                  }
                />

                {props.values.name && (
                  <EditBtn
                    type="button"
                    onClick={() => props.setFieldValue('name', '')}
                  >
                    <EditIcon />
                  </EditBtn>
                )}
              </NameLabel>
              {props.errors.name ? (
                <ErrorMessage>{props.errors.name}</ErrorMessage>
              ) : null}
              <SubmitBtn
                type="submit"
                disabled={
                  !(
                    (props.touched.name &&
                      props.values.name &&
                      !props.errors.name) ||
                    (props.touched.avatar &&
                      props.values.avatar &&
                      !props.errors.avatar)
                  )
                }
              >
                Save changes
              </SubmitBtn>
            </InputButtonWrapper>
          </FormStyled>
        )}
      </Formik>
    </ModalWrapper>
  );
};

export default UserInfoModal;
