import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import {
  addRecipeValidationSchema,
  storageServices,
  createObjErrorResipeForm,
} from 'helpers';

import { fetchAllCategories } from 'services/categories-API';
import { addOwnRecipeAPI } from 'redux/OwnRecipes/ownApi';
import { getAllIngredients } from 'services/ingredients-API';

import RecipeFormDescriptionFields from './RecipeFormDescriptionFields';
import RecipeFormIngredientsFields from './RecipeFormIngredientsFields';
import RecipeFormPreparationFields from './RecipeFormPreparationFields';
import Loader from 'components/Loader';

import { Form, SubmitBtn } from './AddRecipeForm.styled';

const STORAGE_KEY_ADDING_RESIPE = 'added-data-recipe';

let isLoadAllCategory = false;
let isLoadAllIngredients = false;

const AddRecipeForm = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState(
    () => storageServices.get(STORAGE_KEY_ADDING_RESIPE)?.title || ''
  );
  const [description, setDescription] = useState(
    () => storageServices.get(STORAGE_KEY_ADDING_RESIPE)?.description || ''
  );

  const [category, setCategory] = useState(
    () => storageServices.get(STORAGE_KEY_ADDING_RESIPE)?.category || 'Beef'
  );

  const [time, setTime] = useState(
    () => storageServices.get(STORAGE_KEY_ADDING_RESIPE)?.time || '15 min'
  );

  const [ingredients, setIngredients] = useState(
    () => storageServices.get(STORAGE_KEY_ADDING_RESIPE)?.ingredients || []
  );

  const [instructions, setInstructions] = useState(
    () => storageServices.get(STORAGE_KEY_ADDING_RESIPE)?.instructions || ''
  );

  const [formErrors, setFormErrors] = useState({});
  const [isShowErrors, setIsShowErrors] = useState(false);
  const [isAddRecipe, setIsAddRecipe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isWaitResponse, setIsWaitResponse] = useState(false);
  const { t } = useTranslation();

  const navigate = useNavigate();

  const formData = useMemo(
    () => ({
      preview: preview || undefined,
      title: title.trim(),
      description: description.trim(),
      category,
      time,
      ingredients: ingredients.map(({ id, unit, amount }) => ({
        id,
        measure: `${(amount, unit)}`,
      })),
      instructions: instructions.trim(),
    }),
    [category, description, preview, ingredients, instructions, time, title]
  );

  useEffect(() => {
    storageServices.save(STORAGE_KEY_ADDING_RESIPE, {
      category,
      description,
      preview,
      ingredients,
      instructions,
      time,
      title,
    });
    return () => {};
  }, [category, description, preview, ingredients, instructions, time, title]);

  useEffect(() => {
    if (allCategory.length || isLoadAllCategory) return;
    isLoadAllCategory = true;

    const getCategories = async () => {
      const categoriesList = (await fetchAllCategories()) || [];
      return categoriesList;
    };

    setIsLoading(true);

    getCategories()
      .then(({ categoriesList }) => {
        if (categoriesList.length > 0 && !category) {
          setCategory(categoriesList[0]);
        }
        setAllCategory(categoriesList);
      })
      .catch(() => {})
      .finally(() => {
        isLoadAllCategory = false;
        setIsLoading(false);
      });
  }, [allCategory.length, category]);

  useEffect(() => {
    if (!isShowErrors) return;
    async function validateForm() {
      try {
        await addRecipeValidationSchema.validate(formData, {
          abortEarly: false,
        });
        setFormErrors({});
        return true;
      } catch (error) {
        const errors = error.inner.reduce(createObjErrorResipeForm, {});
        setFormErrors(errors);
        return false;
      }
    }
    validateForm();
  }, [formData, isShowErrors]);

  useEffect(() => {
    if (isLoadAllIngredients) return;
    isLoadAllIngredients = true;

    const getAllIngredientsList = async () => {
      const ingredientsList = (await getAllIngredients()) || [];
      return ingredientsList;
    };
    setIsLoading(true);
    getAllIngredientsList()
      .then(data => {
        setAllIngredients(data);
      })
      .catch(() => {})
      .finally(() => {
        isLoadAllIngredients = false;
        setIsLoading(false);
      });
  }, []);

  const handleDeleteIngridient = id => {
    const filteredData = ingredients.filter(el => el.idInput !== id);
    setIngredients(filteredData);
  };

  const resetDataFormInLocalStorage = () => {
    setPreview(null);
    storageServices.save(STORAGE_KEY_ADDING_RESIPE, null);
  };

  const onUpdateDataInInputIngridient = (idInput, ingridientData) => {
    const changeData = ingredients.map(elem => {
      if (elem.idInput === idInput) {
        return { ...elem, ...ingridientData };
      } else {
        return elem;
      }
    });
    setIngredients([...changeData]);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (isAddRecipe) {
      return;
    }

    const isValid = addRecipeValidationSchema.isValidSync(formData);
    if (!isValid) {
      toast.error(t('addRecipeForm.errorFirst'));
      setIsShowErrors(true);
      return;
    }
    setIsAddRecipe(true);

    const dataForSend = {
      preview,
      title: title.trim(),
      description: description.trim(),
      category,
      time: time.slice(0, time.indexOf(' ')),
      ingredients: ingredients.map(({ id, unit, amount }) => ({
        id,
        measure: amount + ' ' + unit,
      })),
      instructions: instructions
        .trim()
        .split('\n')
        .filter(el => el.length !== 0)
        .join('\r\n'),
    };

    setIsWaitResponse(true);

    addOwnRecipeAPI(dataForSend)
      .then(data => {
        setIsAddRecipe(false);
        setIsWaitResponse(false);
        if (data?.error) {
          toast.error(data.error.response.data.message);
          return;
        }
        toast.success(`Your recipe ${title} has been created`);
        resetDataFormInLocalStorage();
        setIsShowErrors(false);
        navigate('/my');
      })
      .catch(e => {
        toast.error(t('addRecipeForm.errorSecond'));
        setIsAddRecipe(false);
        setIsWaitResponse(false);
      });
  };

  const isDisabledBtnSubmit =
    isAddRecipe || (isShowErrors && Object.keys(formErrors).length > 0);

  return (
    <Form onSubmit={onSubmitHandler}>
      {isWaitResponse || (isLoading && <Loader />)}

      <RecipeFormDescriptionFields
        allCategory={allCategory}
        image={{ preview, setPreview }}
        name={{ title, setTitle }}
        descriptionData={{ description, setDescription }}
        categoryData={{ category, setCategory }}
        cokingTime={{ time, setTime }}
        formErrors={formErrors}
      />
      <RecipeFormIngredientsFields
        ingredients={ingredients}
        setIngredients={setIngredients}
        onDeleteIngridient={handleDeleteIngridient}
        formErrors={formErrors}
        allIngredients={allIngredients}
        onUpdateIngridient={onUpdateDataInInputIngridient}
      />
      <RecipeFormPreparationFields
        value={instructions}
        onChange={setInstructions}
        formErrors={formErrors}
      />

      <SubmitBtn
        type="submit"
        onSubmit={onSubmitHandler}
        disabled={isDisabledBtnSubmit}
      >
        {t('addRecipeForm.submitBtn')}
      </SubmitBtn>
    </Form>
  );
};

export default AddRecipeForm;
