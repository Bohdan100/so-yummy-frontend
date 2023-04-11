import * as Yup from 'yup';

export const addRecipeValidationSchema = Yup.object().shape({
  preview: Yup.mixed()
    .test('required', 'Photo is required', value => {
      return !value || (value && value.name.length > 0);
    })
    .test('fileType', 'Only picture files are allowed', value => {
      return (
        !value ||
        (value && ['image/jpeg', 'image/jpg', 'image/png'].includes(value.type))
      );
    })
    .test('fileSize', 'Picture size is too large', value => {
      return !value || (value && value.size <= 16777216);
    }),
  title: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(80, 'Maximum 80 characters')
    .required('Title recipe is required'),
  description: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(200, 'Maximum 200 characters')
    .required('Description recipe is required'),
  category: Yup.string().required('Category recipe is required'),
  time: Yup.string().required('Time recipe is required'),
  ingredients: Yup.array()
    .min(1, 'You need and minimun one ingregient')
    .max(20, 'No more than 20 ingredients')
    .of(
      Yup.object().shape({
        id: Yup.string(),
        measure: Yup.string()
          .min(1, 'You need to add weight')
          .max(3, 'Measure must be less than 999')
          .required('Amount ingredient is required'),
      })
    )
    .required('At least one ingredient is required'),
  instructions: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(2000, 'Maximum 2000 characters')
    .required('Recipe instruction is required'),
});
