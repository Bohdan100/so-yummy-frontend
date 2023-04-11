import axios from 'axios';

export async function FetchSearchedMeals(searchParams) {
  const response = await axios.get(`/search`, { params: searchParams });

  return response.data;
}
