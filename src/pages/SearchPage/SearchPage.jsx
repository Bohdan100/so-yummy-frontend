import React, { useEffect, useState } from 'react';
import MainContainer from 'components/MainContainer/MainContainer';
import ReusableTitle from 'components/ReusableComponents/ReusableTitle/ReusableTitle';
import { SearchBar } from 'components/SearchPage/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { NoSearchResult } from 'components/SearchPage/NoSearchResult/NoSearchResult';

import NotFoundWrapp from 'components/CategoriesByName/NotFoundWrapp';
import Loader from 'components/Loader/Loader';

const SearchPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const type = searchParams.get('type') ?? 'Title';

  const onSubmit = (query, type) => {
    let page = 1;
    let perPage = 5;
    setSearchParams({ type, query, page, perPage });
  };

  async function FetchSearchedMeals(searchParams) {
    const response = await axios.get(`/search`, { params: searchParams });

    console.log(response.data.meals);
    return response.data.meals;
  }

  useEffect(() => {
    if (query === '' || type === '') return;

    async function SearchRecipes() {
      try {
        setIsLoading(true);
        const recipes = await FetchSearchedMeals(searchParams);
        console.log(recipes);
        if (recipes.length === 0) {
          toast.error(
            'Sorry, there are no recipes matching your search query. Please, try again.',
            {
              position: 'top-right',
            }
          );
        }
        setRecipes(recipes);
      } catch (error) {
        toast.error('Something went wrong. Please, reload the page.', {
          position: 'top-center',
        });
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    SearchRecipes();
  }, [type, query]);

  return (
    <MainContainer>
      <ReusableTitle>Search</ReusableTitle>
      <SearchBar onSubmit={onSubmit} startType={type} startQuery={query} />
      {isLoading ? (
        <Loader />
      ) : recipes < 1 ? (
        <NotFoundWrapp>Try looking for something else..</NotFoundWrapp>
      ) : (
        <p>Recepies will be here</p>
      )}
    </MainContainer>
  );
};

export default SearchPage;
