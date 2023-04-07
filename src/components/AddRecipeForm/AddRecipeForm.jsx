import RecipePageBtn from 'components/RecipePageBtn';
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
  TextAreaContainer,
  Area,
  Title,
  InputContainerFile,
  ButtonFile,
  SelectContainer,
  SelectTitle,
  SelectStyled,
  CloseIconStyled,
  IconFile,
  FirstTitle,
} from './AddRecipePage.styled';
import { PreviewImage } from './PreviewImage';
import { TextError } from './TextError';

const Schema = Yup.object({
  item: Yup.string().required('Required'),
  about: Yup.string().required('Required'),
  selectCategory: Yup.string().required('Required'),
  selectTime: Yup.string().required('Required'),
  file: Yup.mixed().required('File is required'),
});

export const AddRecipeForm = () => {
  const fileRef = useRef(null);

  const dropdownOptions = [
    { key: 'Category', value: '' },
    { key: 'breakfast', value: 'Breakfast' },
    { key: 'beef', value: 'Beef' },
    { key: 'miscellaneous', value: 'Miscellaneous' },
    { key: 'dessert', value: 'Dessert' },
    { key: 'goat', value: 'Goat' },
    { key: 'lamb', value: 'Lamb' },
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
      <FirstTitle>Add recipe</FirstTitle>
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
          console.log(formik.dirty);
          console.log(formik.isValid);
          console.log(formik.values.selectCategory);
          console.log(formik.values.selectTime);
          return (
            <Form>
              <InputContainerFile>
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
                {!formik.values.file && (
                  <ButtonFile
                    type="button"
                    onClick={() => {
                      fileRef.current.click();
                    }}
                  >
                    <IconFile />
                  </ButtonFile>
                )}
                <ErrorMessage name="file" component={TextError} />
              </InputContainerFile>
              <InputContainer>
                <Input type="text" name="item" placeholder="Enter item title" />
                <ErrorMessage name="item" component={TextError} />
              </InputContainer>
              <InputContainer>
                <Input
                  type="text"
                  name="about"
                  placeholder="Enter about recipe"
                />
                <ErrorMessage name="about" component={TextError} />
              </InputContainer>
              <SelectContainer>
                <SelectTitle>Enter item title</SelectTitle>
                <Field as={SelectStyled} name="selectCategory">
                  {dropdownOptions.map(option => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.key}
                      </option>
                    );
                  })}
                </Field>
              </SelectContainer>
              <ErrorMessage name="selectCategory" component={TextError} />
              <SelectContainer>
                <SelectTitle>Cooking time</SelectTitle>
                <Field as={SelectStyled} name="selectTime">
                  {cookingTime.map(option => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.key}
                      </option>
                    );
                  })}
                </Field>
              </SelectContainer>
              <ErrorMessage name="selectTime" component={TextError} />
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
                      <InputContainer>
                        <IngredienControler>
                          <Title>Ingredients</Title>
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
                            <Field
                              type="text"
                              name={`ingredients[${index}].ingredien`}
                            />

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
                                <CloseIconStyled />
                              </ButtonClickIngredient>
                            )}
                          </SelectIngredienContainer>
                        ))}
                      </InputContainer>
                    );
                  }}
                </FieldArray>
              </div>
              <TextAreaContainer>
                <Title>Recipe Preparation</Title>
                <Area
                  as="textarea"
                  name="textarea"
                  placeholder="Enter recipe"
                />
                <ErrorMessage name="textarea" component={TextError} />
              </TextAreaContainer>

              <RecipePageBtn
                text="Add"
                type="submit"
                disabled={!(formik.dirty && formik.isValid)}
              ></RecipePageBtn>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
