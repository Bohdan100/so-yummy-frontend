import axios from 'axios';

export async function FetchSearchedMeals(searchParams) {
  const response = await axios.get(`/search`, { params: searchParams });

  console.log(response);
  return response.data;
}
