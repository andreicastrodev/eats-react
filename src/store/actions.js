import {recipesActions} from "./recipe-slice";
import {loadingActions} from "./loading-slice";
import {errorActions} from "./error-slice";
export const fetchSearchAndResult = (query) => {
    return async (dispatch) => {
        const handleFetchRecipes = async () => {
            try {
                dispatch(loadingActions.setResultsSpinner());
                const RES = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`);

                if (! RES.ok) {
                    throw new Error("No recipes found for your query! Please try again");
                }

                const DATA = await RES.json();

                dispatch(recipesActions.addQueryAndResults({
                    payload: {
                        query,
                        DATA
                    }
                }));
                dispatch(errorActions.setError({payload: ''}))

                dispatch(loadingActions.setResultsSpinner());
            } catch (error) {
                dispatch(errorActions.setError({payload: error.message}))
                dispatch(loadingActions.setResultsSpinner());

                console.error(error);
            }
        };
        handleFetchRecipes();
    };
};

export const fetchRecipe = () => {
    return async (dispatch) => {
        const handleFechRecipe = async () => {
            try {
                dispatch(loadingActions.setRecipeSpinner());

                const id = window.location.hash.slice(1);
                console.log(id);
                if (id.length === 5) {
                    const RES = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
                    if (! RES.ok) 
                        throw new Error("Something went Wrong");
                    


                    const DATA = await RES.json();

                    console.log(DATA);
                    dispatch(recipesActions.addRecipeOnHashChange({payload: DATA.recipe}));
                    dispatch(loadingActions.setRecipeSpinner());
                } else 
                    return;
                


                if (! id) 
                    return;
                


            } catch (error) {
                console.error(error);
            }
        };
        handleFechRecipe();
    };
};
