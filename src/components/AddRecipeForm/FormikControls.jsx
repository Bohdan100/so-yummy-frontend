import { TextArea } from './TextArea';
import { Select } from './Select';

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'textarea':
      return <TextArea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
