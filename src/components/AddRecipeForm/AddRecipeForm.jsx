import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Schema = Yup.object({
  item: Yup.string().required('Required'),
  about: Yup.string().required('Required'),
});

export const AddRecipeForm = () => {
  return (
    <div>
      <h1>Add recipe</h1>
      <Formik
        initialValues={{
          item: '',
          about: '',
        }}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
        validationSchema={Schema}
      >
        <Form>
          <div>
            <Field name="item" />
            <ErrorMessage name="item" />
          </div>
          <div>
            <Field name="about" />
            <ErrorMessage name="about" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
