import { Pagination } from '@mui/material';
import { PaginationWrapper } from './pagination.styled';

export const PaginationComp = ({ count, page, handleChange }) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <PaginationWrapper>
      <Pagination
        siblingCount={0}
        count={count}
        page={page}
        onChange={handleChange}
      />
    </PaginationWrapper>
  );
};
