interface IIngredient {
    ingredient: string,
    amount: string,
    measurement: string
}

interface IRecipe {
    id: number,
    name: string,
    timeToPrepare: number,
    ingredients: IIngredient[],
    instructions: string[]
}

type RecipeState = {
    recipes: IRecipe[]
}

type RecipeAction = {
    type: string,
    recipe: IRecipe
}

type DispatchType = (args: RecipeAction) => RecipeAction