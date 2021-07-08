import React, { useState } from "react";
import styles from "./Header.module.css";
import { ReactComponent as HeaderMode } from "../../misc/svg/mode.svg";
import { ReactComponent as HeaderBookmark } from "../../misc/svg/bookmark.svg";
import { useDispatch, useSelector } from "react-redux";
import { modeActions } from "../../store/mode-slice";
import { fetchSearchAndResult } from "../../store/actions";
import { fetchRecipe } from "../../store/actions";
const Header = () => {
  const bookmarkedRecipes = useSelector((state) => state.recipe.bookmarks);
  const [searchField, setSearchField] = useState("");
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(fetchSearchAndResult(searchField));
  };

  const handleModeSelector = () => {
    dispatch(modeActions.setModeToggler());
  };
  const handleSearchField = (e) => {
    setSearchField(e.target.value);
  };

  const transformedBookmarkedRecipes = bookmarkedRecipes.map((item) => {
    return item.payload;
  });

  const onHashChangeHandler = () => {
    setTimeout(function () {
      dispatch(fetchRecipe());
    }, 10);
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>Eatsys</h1>
      <form onSubmit={formSubmitHandler} className={styles.headerForm}>
        <input
          className={styles.headerInput}
          type="text"
          placeholder="Search recipes now!"
          value={searchField}
          onChange={handleSearchField}
        />
        <button className={styles.headerBtn}>Search</button>
      </form>
      <nav className={styles.headerFns}>
        <li>
          <button onClick={handleModeSelector}>
            <HeaderMode className={styles.headerMode} />
          </button>
        </li>
        <li>
          <button className={styles.heaverBookmarkBtn}>
            <HeaderBookmark className={styles.headerBookmark} />
            <span>Bookmark</span>
          </button>
          <div className={styles.headerBookmarks}>
            <ul className={styles.headerBookmarksList}>
              {bookmarkedRecipes.length > 0 ? (
                transformedBookmarkedRecipes.map((recipe) => (
                  <li
                    key={recipe.recipeId}
                    className={styles.headerBookmarksPreview}
                    onClick={onHashChangeHandler}
                  >
                    <a
                      className={styles.headerPreviewLink}
                      href={`#${recipe.recipeId}`}
                    >
                      <figure className={styles.headerFigure}>
                        <img
                          className={styles.headerImg}
                          src={recipe.imageUrl}
                          alt=""
                        />
                      </figure>
                      <div className={styles.headerData}>
                        <h4 className={styles.headerDataTitle}>
                          {recipe.title}
                        </h4>
                        <p className={styles.headerDataPublisher}>
                          {recipe.publisher}
                        </p>
                      </div>
                    </a>
                  </li>
                ))
              ) : (
                <p className={styles.headerBookmarkMessage}>
                  Bookmark a recipe now :)
                </p>
              )}
            </ul>
          </div>
        </li>
      </nav>
    </div>
  );
};

export default Header;
