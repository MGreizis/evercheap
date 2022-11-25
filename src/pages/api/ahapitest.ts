import { Aldi } from 'aldi-wrapper';

export async function findRecipes(recipeName: string) {
    const aldi = new Aldi();
    const recipes = aldi.recipe().getRecipesFromName(recipeName);
    console.log(
        (await recipes).recipes.map((recipe: { title: any; }) => {
            return recipe.title;
        })
    );
}

findRecipes('pasta');
