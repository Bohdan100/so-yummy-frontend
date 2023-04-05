import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';

export const TextArea = props => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field
        as="textarea"
        id={name}
        name={name}
        {...rest}
        placeholder="Enter recipe"
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};
