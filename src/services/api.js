import axios from "axios";


export const getRecipes = async (type) => {
  const response = await axios.get(`https://forkify-api.jonas.io/api/v2/recipes?search=${type}`);
  return response.data.data.recipes;
};