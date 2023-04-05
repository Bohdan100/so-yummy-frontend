import { Formik, Form, ErrorMessage, FieldArray, Field } from 'formik';
import { useRef } from 'react';
import * as Yup from 'yup';
import {
  Input,
  InputContainer,
  SelectIngredienContainer,
  IngredienControler,
  IngredienLenght,
  ButtonClickIngredient,
} from './AddRecipePage.styled';
import FormikControl from './FormikControls';
import { PreviewImage } from './PreviewImage';
import { TextError } from './TextError';

const Schema = Yup.object({
  item: Yup.string().required('Required'),
  about: Yup.string().required('Required'),
  selectCategory: Yup.mixed().required('Required'),
  selectTime: Yup.mixed().required('Required'),
  file: Yup.mixed().required('File is required'),
});

export const AddRecipeForm = () => {
  const fileRef = useRef(null);

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

  return (
    <div>
      <h1>Add recipe</h1>
      <Formik
        initialValues={{
          item: '',
          about: '',
          selectCategory: '',
          selectTime: '',
          ingredients: [],
          file: null,
        }}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={Schema}
      >
        {formik => {
          return (
            <Form>
              <InputContainer>
                <input
                  type="file"
                  name="file"
                  hidden
                  ref={fileRef}
                  onChange={event => {
                    formik.setFieldValue('file', event.target.files[0]);
                  }}
                />
                {formik.values.file && (
                  <PreviewImage file={formik.values.file} />
                )}
                <button
                  type="button"
                  onClick={() => {
                    fileRef.current.click();
                  }}
                >
                  Upload
                </button>
                <ErrorMessage name="file" component={TextError} />
              </InputContainer>
              <InputContainer>
                <Input type="text" name="item" placeholder="Enter item title" />
                <ErrorMessage name="item" component={TextError} />
              </InputContainer>
              <InputContainer>
                <Input
                  type="text"
                  name="about"
                  placeholder="Enter
                  about
                  recipe"
                />
                <ErrorMessage name="about" component={TextError} />
              </InputContainer>
              <InputContainer>
                <FormikControl
                  control="select"
                  name="selectCategory"
                  options={dropdownOptions}
                />
              </InputContainer>
              <InputContainer>
                <FormikControl
                  control="select"
                  name="selectTime"
                  options={cookingTime}
                />
              </InputContainer>
              {/* <div>
                <button type="button" onClick={removeSelect}>
                  -
                </button>
                <span>{ingredients.length}</span>
                <button type="button" onClick={addSelect}>
                  +
                </button>
              </div>
              <div>
                {ingredients.map(({ id, index }) => (
                  <FormikControl
                    key={id}
                    control="select"
                    name={`ingredients[${id}]`}
                    options={ingrediensArray}
                  />
                ))}
              </div> */}
              <div>
                <FieldArray name="ingredients">
                  {fieldArrayProps => {
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { ingredients } = values;
                    console.log(ingredients);

                    const addSelect = () => {
                      push('');
                    };

                    const deleteSelect = () => {
                      ingredients.pop();
                    };

                    return (
                      <div>
                        <IngredienControler>
                          <h2>Ingredients</h2>
                          <IngredienLenght>
                            {ingredients.length > 0 && (
                              <ButtonClickIngredient
                                type="buttom"
                                onClick={deleteSelect}
                              >
                                -
                              </ButtonClickIngredient>
                            )}
                            <span>{ingredients.length}</span>
                            <ButtonClickIngredient
                              type="buttom"
                              onClick={addSelect}
                            >
                              +
                            </ButtonClickIngredient>
                          </IngredienLenght>
                        </IngredienControler>
                        {ingredients.map((_, index) => (
                          <SelectIngredienContainer key={index}>
                            {/* <FormikControl
                              control="select"
                              name="selectTime"
                              options={ingrediensArray}
                            /> */}
                            <Field
                              type="text"
                              name={`ingredients[${index}].ingredient`}
                            ></Field>
                            <Field
                              as="select"
                              name={`ingredients[${index}].weight`}
                            >
                              {cookingTime.map(option => {
                                return (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.key}
                                  </option>
                                );
                              })}
                            </Field>
                            {index >= 0 && (
                              <ButtonClickIngredient
                                type="button"
                                onClick={() => remove(index)}
                              >
                                X
                              </ButtonClickIngredient>
                            )}
                          </SelectIngredienContainer>
                        ))}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>
              <InputContainer>
                <FormikControl
                  control="textarea"
                  label="Recipe Preparation"
                  name="textarea"
                />
              </InputContainer>
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
