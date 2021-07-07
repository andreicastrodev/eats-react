import "./App.css";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import Recipe from "./components/Recipe/Recipe";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function App() {
  const recipe = useSelector((state) => state.recipe.recipe);

  const hasRecipe = Object.keys(recipe).length === 0;
  useEffect(() => {
    window.location.hash = "";
  }, []);

  return (
    <div className="App">
      <Header />
      <Results />
      {hasRecipe ? <p>Search Now : )</p> : <Recipe />}
    </div>
  );
}

export default App;
