import { Pagination } from '@mui/material';

export const PaginationComp = ({ count, page, handleChange }) => {
  return (
    <div>
      <Pagination
        siblingCount={0}
        count={count}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};
