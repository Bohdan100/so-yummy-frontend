import React, { useState, useEffect } from 'react';
// import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
import {
  fetchFavoriteRacipes,
  removeRecipeFromFavorites,
} from '../../services/favorite-API';
import Loader from 'components/Loader/Loader';
import ReusableTitle from 'components/ReusableComponents/ReusableTitle/ReusableTitle';
import Container from '../../components/MainContainer/';
import FavoriteList from 'components/FavoriteList/FavoriteList';
// import { PaginationWrapper } from './FavoritePage.styled';

const FavoritePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [pageNumber, setPageNumber] = useState(0);
  // const favoritesPerPage = 4;
  // const pagesVisited = pageNumber * favoritesPerPage;

  useEffect(() => {
    async function getFavoriteRacipes() {
      try {
        setIsLoading(true);
        const response = await fetchFavoriteRacipes();
        console.log(response);
        setRecipes(response.data);
      } catch (error) {
        setError({ error });
        toast.error(`Something went wrong. Plese try again...`);
      } finally {
        setIsLoading(false);
      }
    }
    getFavoriteRacipes();
  }, []);

  // const displayFavorites = Array.isArray(recipes)
  //   ? recipes.slice(pagesVisited, pagesVisited + favoritesPerPage)
  //   : [];
  // console.log(displayFavorites);
  // const pageCount = Math.ceil(recipes.length / favoritesPerPage);

  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };

  // const handleDelete = recipeId => {
  //   const updatedRecipes = recipes.filter(recipe => recipe._id !== recipeId);
  //   setRecipes(updatedRecipes);
  // };
  console.log(recipes.result);
  const handleRemoveRecipe = async id => {
    await removeRecipeFromFavorites(id);
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };
  return (
    <>
      {isLoading && <Loader />}
      <Container>
        <ReusableTitle>Favorites</ReusableTitle>
        {recipes.result && (
          <FavoriteList
            recipes={recipes.result}
            handleDelete={handleRemoveRecipe}
          />
        )}
        {/* <PaginationWrapper>
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
        </PaginationWrapper> */}
        {error && <p>Whoops, something went wrong: {error.message}</p>}
      </Container>
    </>
  );
};

export default FavoritePage;
