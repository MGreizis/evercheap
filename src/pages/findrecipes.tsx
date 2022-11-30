// import { Aldi } from "aldi-wrapper";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function findRecipes(recipeName: string) {
//   const aldi = new Aldi();
//   const recipes = aldi.recipe().getRecipesFromName(recipeName);
//   console.log(
//     (await recipes).recipes.map((recipe: { title: any }) => {
//       return recipe.title;
//     })
//   );
//   return findRecipes("chicken").then((recipes: string) => {
//     return recipes;
//   });
// }

// // findRecipes("chicken");