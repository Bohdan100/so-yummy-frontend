import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import ReusableTitle from 'components/ReusableTitle/ReusableTitle';
import Container from '../../components/MainContainer/';
import FavoriteList from 'components/FavoriteList/FavoriteList';
import { PaginationWrapper } from './FavoritePage.styled';
// import { initialState } from 'components/FavoriteList/myFavorite';

const BASE_URL =
  'https://so-yummy-98ev.onrender.com/api/favorite/?page=1&limit=4&sort=popular';

const FavoritePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const favoritesPerPage = 4;
  const pagesVisited = pageNumber * favoritesPerPage;
  useEffect(() => {
    axios
      .get(BASE_URL)
      .then(response => setRecipes(response.data))
      .catch(error => console.error(error));
    // setRecipes(initialState);
  }, []);
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
    <Container>
      <ReusableTitle>Favorites</ReusableTitle>
      <FavoriteList recipes={displayFavorites} handleDelete={handleDelete} />
      {/* {displayFavorites} */}
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
    </Container>
  );
};

export default FavoritePage;
