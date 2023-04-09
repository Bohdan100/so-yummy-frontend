import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
import { fetchFavoriteRacipes } from '../../../services/categories-API';
import NotFoundWrapp from '../NotFoundWrapp/';
import Loader from 'components/Loader/Loader';
import ReusableTitle from 'components/ReusableComponents/ReusableTitle/ReusableTitle';
import Container from '../../components/MainContainer/';
import FavoriteList from 'components/FavoriteList/FavoriteList';
import { PaginationWrapper } from './FavoritePage.styled';
import { initialState } from 'components/FavoriteList/myFavorite';

const FavoritePage = () => {
  const [recipes, setRecipes] = useState(initialState);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const favoritesPerPage = 4;
  const pagesVisited = pageNumber * favoritesPerPage;

  useEffect(() => {
    async function getFavoriteRacipes() {
      try {
        setIsLoading(true);
        const { data } = await fetchFavoriteRacipes();
        setRecipes(data);
      } catch (error) {
        setError({ error });
        toast.error(`Something went wrong. Plese try again...`);
      } finally {
        setIsLoading(false);
      }
    }
    getFavoriteRacipes();
  }, []);
  // useEffect(() => {
  //   setRecipes(initialState);
  // }, []);
  const displayFavorites = recipes.slice(
    pagesVisited,
    pagesVisited + favoritesPerPage
  );

  const pageCount = Math.ceil(recipes.length / favoritesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const handleDelete = recipeId => {
    const updatedRecipes = recipes.filter(
      recipe => recipe._id.$oid !== recipeId
    );
    setRecipes(updatedRecipes);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Container>
        <ReusableTitle>Favorites</ReusableTitle>
        <FavoriteList recipes={displayFavorites} handleDelete={handleDelete} />
        <PaginationWrapper>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationBtns'}
            previousLinkClassName={'previousBtn'}
            nextLinkClassName={'nextBtn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
        </PaginationWrapper>
        {error && (
          <NotFoundWrapp>
            Whoops, something went wrong: {error.message}
          </NotFoundWrapp>
        )}
      </Container>
    </>
  );
};

export default FavoritePage;
