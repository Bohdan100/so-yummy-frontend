import { ErrorMessage } from 'formik';
import { TextError } from './TextError';
import { SelectInput } from './AddRecipePage.styled';

export const Select = props => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <SelectInput as="select" id={name} name={name} {...rest}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </SelectInput>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};
