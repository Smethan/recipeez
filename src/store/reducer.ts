import * as actionTypes from './actionTypes'

const initialState: RecipeState = {
    recipes: [{
        id: 0,
        name: '',
        timeToPrepare: 0,
        ingredients: [{
            ingredient: '',
            amount: '',
            measurement: ''
        }],
        instructions: ['']
    }]
}

const recipeReducer = (
    state: RecipeState = initialState,
    action: RecipeAction
): RecipeState => {
    switch (action.type) {
        case actionTypes.ADD_RECIPE:
            let newIngredients: IIngredient[] = [];
            action.recipe.ingredients.forEach((element, index) => {
                newIngredients[index] = element;
            });
            const newRecipe: IRecipe = {
                id: action.recipe.id,
                name: action.recipe.name,
                timeToPrepare: action.recipe.timeToPrepare,
                ingredients: newIngredients,
                instructions: action.recipe.instructions
            }
            return {
                ...state,
                recipes: state.recipes.concat(newRecipe)
            }
        case actionTypes.REMOVE_RECIPE:
            const updatedRecipes: IRecipe[] = state.recipes.filter(
                recipe => recipe.id !== action.recipe.id
            )
            return {
                ...state,
                recipes: updatedRecipes
            }
    }
    return state
}

export default recipeReducer;