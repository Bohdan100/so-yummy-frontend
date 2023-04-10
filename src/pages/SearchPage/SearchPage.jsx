import React, { useEffect, useState } from 'react';
import MainContainer from 'components/MainContainer/MainContainer';
import ReusableTitle from 'components/ReusableComponents/ReusableTitle/ReusableTitle';
import { SearchBar } from 'components/SearchPage/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import NotFoundWrapp from 'components/ReusableComponents/NotFoundWrapp/index';
import Loader from 'components/Loader/Loader';
import { RecipesList } from 'components/CategoriesByName/CategoriesByName.styled';
import RecipeCard from 'components/ReusableComponents/RecipeCard';
import { scrollToTop } from 'helpers';
import { PaginationComp } from 'components/Pagination/pagination';
import { FetchSearchedMeals } from 'services/search-meals-API';
import { useDesktopCheck } from 'hooks/desktopCheck';

const SearchPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState();
  const { isTablet, isDesktop } = useDesktopCheck();
  const query = searchParams.get('query') ?? '';
  const type = searchParams.get('type') ?? 'Title';

  const perPageItems = () => {
    let perPage;
    if (isDesktop) {
      perPage = 12;
    } else if (isTablet) {
      perPage = 6;
    } else {
      perPage = 6;
    }
    return perPage;
  };

  const onSubmit = (query, type) => {
    setPage(1);
    setError(null);
    setSearchParams({ type, query, page, perPage: perPageItems() });
  };

  const handleChange = (event, value) => {
    setPage(value);
    setSearchParams({ type, query, page: value, perPage: perPageItems() });
    scrollToTop();
  };

  useEffect(() => {
    if (query === '' || type === '') return;

    async function SearchRecipes() {
      try {
        setIsLoading(true);
        const recipes = await FetchSearchedMeals(searchParams);

        if (recipes.length === 0) {
          toast.error(
            'Sorry, there are no recipes matching your search query. Please, try again.',
            {
              position: 'top-right',
            }
          );
        }
        setRecipes(recipes.meals);
        setTotalHits(recipes.totalHits);
      } catch (error) {
        toast.error('Something went wrong. Please, reload the page.', {
          position: 'top-right',
        });
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    SearchRecipes();
  }, [type, query, searchParams]);

  return (
    <MainContainer>
      <ReusableTitle>Search</ReusableTitle>
      <SearchBar onSubmit={onSubmit} startType={type} startQuery={query} />
      {error && (
        <NotFoundWrapp>
          Whoops, something went wrong: {error.message}
        </NotFoundWrapp>
      )}
      {isLoading && <Loader />}
      {recipes.length > 0 && !error && !isLoading && (
        <RecipesList>
          {recipes.map(recipe => {
            return <RecipeCard dish={recipe} key={recipe._id} />;
          })}
        </RecipesList>
      )}
      {recipes && recipes.length > 0 && (
        <PaginationComp
          count={Math.ceil(totalHits / perPageItems())}
          page={page}
          handleChange={handleChange}
        />
      )}
      {!isLoading && !error && recipes.length === 0 && (
        <NotFoundWrapp>Try looking for something else..</NotFoundWrapp>
      )}
    </MainContainer>
  );
};

export default SearchPage;
