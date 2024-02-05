import { createContext, useState } from "react";
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import Results from "./components/Results";
import Shopping from "./components/Shopping";

export const ForkiFyContext = createContext({})

function App() {

  const [searchResult, setSearchResult] = useState([]);
  const [recipe, setRecipe] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [shoppingList, setShoppingList] = useState();
  const [likeList, setLikeList] = useState([]);


  return (
    <div className="container">
      <ForkiFyContext.Provider value={{ searchResult, setSearchResult, recipe, setRecipe, ingredients, setIngredients, shoppingList, setShoppingList, likeList, setLikeList }}>
        <Header />
        <Results />
        <Recipe />
        <Shopping />
      </ForkiFyContext.Provider>
    </div>
  );
}

export default App;
