import * as Yup from 'yup';

export const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const updateUserValidationSchema = Yup.object().shape({
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
    .min(1, 'Name must contain at least 2 letters')
    .max(16, 'Name must contain maximum 16 letters')
    .required('Name is required'),
});
