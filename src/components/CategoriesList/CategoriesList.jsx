import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from 'axios';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmFhYjI4ZGY3NGY1NGVlZGY4YzU2NiIsImlhdCI6MTY4MDg3NzI1NSwiZXhwIjoxNjgwOTYzNjU1fQ.mVd2HQYDKtJD2hCxQIjbw0HWqb1b5WC7Vi90Wt0Zf_o';

axios.defaults.baseURL = 'https://so-yummy-98ev.onrender.com/api';
const config = {
  headers: { Authorization: 'Bearer ' + token },
};

const url = `/recipes/category-list`;

const getAllCategories = async () => {
  try {
    const { data } = await axios.get(url, config);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getRecipesByCategory = async (
  categoryName,
  limit = 8,
  page = 1
) => {
  const url = `/recipes/categories/${categoryName}?limit=${limit}&page=${page}`;
  try {
    const data = await axios.get(url, config);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const CategoriesList = () => {
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories().then(data => {
      setCategories(data.categoriesList);
      const lowerCaseCategory = data.categoriesList[value].toLowerCase();
      navigate(`/categories/${lowerCaseCategory}`);
    });
  }, [navigate, value]);

  const handleChange = (e, newCategory) => {
    navigate(`/categories/${e.target.textContent}`);
    setValue(newCategory);
  };

  return (
    <>
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
              '& .css-1aquho2-MuiTabs-indicator': {
                backgroundColor: '#8BAA36',
              },
              '& .css-ttwr4n': { backgroundColor: '#8BAA36' },
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            },
            '& .MuiTabs-flexContainer': {
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
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
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            },

            '& svg': {
              opacity: 0.8,
              stroke: '#8BAA36',
              strokeWidth: '3px',
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
          }}
        >
          {categories.map((category, idx) => {
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
    </>
  );
};

export default CategoriesList;
