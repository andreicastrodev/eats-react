import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Results.module.css";
import { fetchRecipe } from "../../store/actions";
import Spinner from "../UI/Spinner/Spinner";
const Results = () => {
  const dispatch = useDispatch();
  const shouldResultSpin = useSelector((state) => state.loading.results);
  const results = useSelector((state) => state.recipe.search.results);
  const mode = useSelector((state) => state.mode.mode);
  const errorMessage = useSelector((state) => state.error.error);
  console.log(errorMessage.payload);
  const onHashChangeHandler = () => {
    setTimeout(function () {
      dispatch(fetchRecipe());
    }, 10);
  };

  let resultsTitle;
  let resultsCook;
  let resultsBoxDark;
  let errorOrResults;
  if (mode === "light") {
    resultsTitle = styles.resultsTitle;
    resultsCook = styles.resultsCook;
  } else {
    resultsTitle = styles.resultsTitleDark;
    resultsCook = styles.resultsCookDark;
    resultsBoxDark = styles.resultsBoxDark;
  }

  if (errorMessage.payload === "") {
    errorOrResults = (
      <li onClick={onHashChangeHandler}>
        {results.map((result) => (
          <a
            href={`#${result.recipe_id}`}
            className={`${styles.resultsBox} ${resultsBoxDark}`}
            key={result.recipe_id}
          >
            <figure className={styles.resultsFig}>
              <img
                className={styles.resultsImg}
                src={result.image_url}
                alt=""
              />
            </figure>
            <div className={styles.resultsInfo}>
              <p className={resultsTitle}>
                {result.title.substring(0, 20) + "..."}
              </p>
              <span className={resultsCook}>{result.publisher}</span>
            </div>
          </a>
        ))}
      </li>
    );
  } else {
    errorOrResults = <p className={styles.errorMessage}>{errorMessage.payload}</p>;
  }

  return (
    <ul className={styles.results}>
      {shouldResultSpin ? <Spinner /> : errorOrResults}
    </ul>
  );
};

export default Results;
