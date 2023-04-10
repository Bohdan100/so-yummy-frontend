import { Field } from 'formik';
import Select from 'react-select';

const CustomSelect = ({
  name,
  options,
  onChange,
  onBlur,
  value,
  placeholder,
}) => {
  return (
    <Field name={name}>
      {({ field }) => (
        <Select
          type="select"
          options={options}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          {...field}
        />
      )}
    </Field>
  );
};

export default CustomSelect;
