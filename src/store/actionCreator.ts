import * as actionTypes from './actionTypes';

export function addRecipe(recipe: IRecipe) {
    const action: RecipeAction = {
        type: actionTypes.ADD_RECIPE,
        recipe
    }

    return HttpRequest(action)
}

export function removeRecipe(recipe: IRecipe) {
    const action: RecipeAction = {
        type: actionTypes.REMOVE_RECIPE,
        recipe
    }

    return HttpRequest(action)
}

export function HttpRequest(action: RecipeAction) {
    return (dispatch: DispatchType) => {
        dispatch(action);
    }
}