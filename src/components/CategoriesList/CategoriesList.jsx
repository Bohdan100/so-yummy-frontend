import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { useState } from 'react';

const CategoriesList = () => {
  const [value, setValue] = useState(1);

  const handleChange = (e, newCategory) => {
    setValue(newCategory);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        sx={{
          marginTop: '50px',
          '@media (min-width: 768px)': {
            marginTop: '72px',
          },
          '@media (min-width: 1440px)': {
            marginTop: '100px',
          },

          '& .MuiTabs-scroller': {
            '& .css-1aquho2-MuiTabs-indicator': { backgroundColor: '#8BAA36' },
            '& .css-ttwr4n': { backgroundColor: '#8BAA36' },
            overflowX: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
          '& .MuiTabs-flexContainer': {
            gap: '28px',
            '@media (min-width: 768px)': {
              gap: '55px',
            },
            '& :hover': {
              color: '#8BAA36',
            },
          },

          '& .MuiTab-root': {
            textTransform: 'capitalize',
            minWidth: 'unset',
            fontSize: '18px',
            fontFamily: 'Poppins',
            fontWeight: '400',
            lineHeight: '18px',
            borderColor: '#8BAA36',
          },

          '& svg': {
            opacity: 0.8,
            stroke: '#8BAA36',
            strokeWidth: '3px',
            transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
          },
        }}
      >
        {categoriesList.map((category, idx) => {
          return (
            <Tab
              label={category.toLowerCase()}
              key={idx}
              sx={{
                padding: '0',
                color: '#BDBDBD',
                '&.Mui-selected': {
                  color: '#8BAA36',
                },
              }}
            />
          );
        })}
      </Tabs>
    </div>
  );
};

export default CategoriesList;

const categoriesList = [
  'Beef',
  'Breakfast',
  'Chicken',
  'Dessert',
  'Goat',
  'Lamb',
  'Miscellaneous',
  'Pasta',
  'Pork',
  'Seafood',
  'Side',
  'Starter',
  'Vegan',
  'Vegetarian',
];
