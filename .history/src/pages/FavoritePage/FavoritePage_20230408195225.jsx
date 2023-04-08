import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import ReusableTitle from 'components/ReusableTitle/ReusableTitle';
import Container from '../../components/MainContainer/';
import FavoriteList from 'components/FavoriteList/FavoriteList';
import { ReactPaginateStyled } from './FavoritePage.styled';
import { initialState } from 'components/FavoriteList/myFavorite';

const FavoritePage = () => {
  const [recipes, setRecipes] = useState(initialState);
  const [pageNumber, setPageNumber] = useState(0);
  const favoritesPerPage = 4;
  const pagesVisited = pageNumber * favoritesPerPage;
  useEffect(() => {
    //   axios.get('https://example.com/api/recipes')
    //     .then(response => setRecipes(response.data))
    //     .catch(error => console.error(error));
    setRecipes(initialState);
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
      <ReactPaginateStyled>
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
      </ReactPaginateStyled>
    </Container>
  );
};

export default FavoritePage;
