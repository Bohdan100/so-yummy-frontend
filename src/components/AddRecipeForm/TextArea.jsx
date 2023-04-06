import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';
import { TextAreaContainer } from './AddRecipePage.styled';

export const TextArea = props => {
  const { label, name, ...rest } = props;
  return (
    <TextAreaContainer>
      <label htmlFor={name}>{label}</label>
      <Field
        as="textarea"
        id={name}
        name={name}
        {...rest}
        placeholder="Enter recipe"
      />
      <ErrorMessage component={TextError} name={name} />
    </TextAreaContainer>
  );
};
