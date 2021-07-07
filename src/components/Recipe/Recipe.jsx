import React from "react";
import { recipesActions } from "../../store/recipe-slice";
import { ReactComponent as Bookmark } from "../../misc/svg/bookmark.svg";
import { ReactComponent as Star } from "../../misc/svg/star.svg";
import Spinner from "../UI/Spinner/Spinner";
import styles from "./Recipe.module.css";
import { useDispatch, useSelector } from "react-redux";
const Recipe = () => {
  const recipe = useSelector((state) => state.recipe.recipe);
  const dispatch = useDispatch();

  const shouldRecipeSpin = useSelector((state) => state.loading.recipe);
  const newRecipe = {
    bookmarked: recipe.payload.bookmarked,
    title: recipe.payload.title,
    publisher: recipe.payload.publisher,
    publisherUrl: recipe.payload.publisher_url,
    imageUrl: recipe.payload.image_url,
    recipeId: recipe.payload.recipe_id,
    socialRank: recipe.payload.social_rank,
    sourceUrl: recipe.payload.source_url,
    ingredients: recipe.payload.ingredients,
  };

  const addBookmarkHandler = () => {
    setTimeout(() => {
      dispatch(recipesActions.addBookmarks({ payload: newRecipe }));

    }, 10);
  };
  return (
    <React.Fragment>
      {shouldRecipeSpin ? (
        <Spinner />
      ) : (
        <div className={styles.recipe}>
          <img className={styles.recipeImg} src={newRecipe.imageUrl} alt="" />
          <div className={styles.recipeTitleBlock}>
            <h2 className={styles.recipeTitle}>{newRecipe.title}</h2>
          </div>
          <div className={styles.recipeCookInfo}>
            <div className={styles.recipeTime}>
              <Star className={styles.recipeTimeSvg} />
              <span>{newRecipe.socialRank}</span>
            </div>
            <div className={styles.recipeServing}>
              <button
                onClick={addBookmarkHandler}
                className={styles.recipeBookmarkButton}
              >
                <Bookmark className={styles.recipeServingSvg} />
              </button>
            </div>
          </div>

          <div className={styles.recipeIngredients}>
            <ul className={styles.recipeIngredientsList}>
              {newRecipe.ingredients.map((item, i) => (
                <li className={styles.recipeList} key={i}>
                  <div className={styles.recipeIngredient}>{item}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.recipeDirections}>
            <h2 className={styles.recipeTitle1}>How to Cook It</h2>
            <p className={styles.recipeText}>
              This recipe was carefully designed and tested by{" "}
              {newRecipe.publisher}. Please check out directions at their
              website.
            </p>
            <button className={styles.recipeBtn}>Directions</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Recipe;
