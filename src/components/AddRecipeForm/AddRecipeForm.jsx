import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControls';
import { TextError } from './TextError';
import { nanoid } from 'nanoid';

const Schema = Yup.object({
  item: Yup.string().required('Required'),
  about: Yup.string().required('Required'),
  selectCategory: Yup.string().required('Required'),
  selectTime: Yup.string().required('Required'),
});

export const AddRecipeForm = () => {
  const [ingredients, setIngredients] = useState([]);

  console.log(ingredients);

  const dropdownOptions = [
    { key: 'Category', value: '' },
    { key: 'Breakfast', value: 'breakfast' },
    { key: 'Beef', value: 'beef' },
    { key: 'Miscellaneous', value: 'miscellaneous' },
    { key: 'Dessert', value: 'dessert' },
    { key: 'Goat', value: 'goat' },
    { key: 'Lamb', value: 'lamb' },
  ];

  const cookingTime = [
    { key: 'Cooking time', value: '' },
    { key: '20 min', value: '20 min' },
    { key: '30 min', value: '30 min' },
    { key: '40 min', value: '40 min' },
    { key: '50 min', value: '50 min' },
    { key: '60 min', value: '60 min' },
    { key: '90 min', value: '90 min' },
  ];

  const ingrediens = [
    { key: 'choose ingredien', value: '' },
    { key: 'apple', value: 'apple' },
    { key: 'orange', value: 'orange' },
    { key: 'banana', value: 'banana' },
  ];

  const addSelect = () => {
    setIngredients([...ingredients, { id: nanoid(), ingredients }]);
  };

  const removeSelect = () => {
    if (ingredients) {
      setIngredients(ingredients.slice(1));
    }
  };

  return (
    <div>
      <h1>Add recipe</h1>
      <Formik
        initialValues={{
          item: '',
          about: '',
          selectCategory: '',
          selectTime: '',
          ingredient: [''],
        }}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
        validationSchema={Schema}
      >
        {formik => {
          return (
            <Form>
              <div>
                <Field type="text" name="item" />
                <ErrorMessage name="item" component={TextError} />
              </div>
              <div>
                <Field type="text" name="about" />
                <ErrorMessage name="about" component={TextError} />
              </div>
              <div>
                <FormikControl
                  control="select"
                  name="selectCategory"
                  options={dropdownOptions}
                />
              </div>
              <div>
                <FormikControl
                  control="select"
                  name="selectTime"
                  options={cookingTime}
                />
              </div>
              <div>
                <button type="button" onClick={removeSelect}>
                  -
                </button>
                <span>{ingredients.length}</span>
                <button type="button" onClick={addSelect}>
                  +
                </button>
              </div>
              <div>
                {ingredients.map(({ id }) => (
                  <FormikControl
                    key={id}
                    control="select"
                    name="ingredient[index]"
                    options={ingrediens}
                  />
                ))}
              </div>
              <div>
                <FormikControl
                  control="textarea"
                  label="Recipe Preparation"
                  name="textarea"
                />
              </div>
              <button
                type="submit"
                disabled={!(formik.dirty && formik.isValid)}
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
