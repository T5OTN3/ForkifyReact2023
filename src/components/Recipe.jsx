import { useContext, useEffect, useState } from "react";
import { ForkiFyContext } from "../App";
import { parseIngredients } from "../utils";


const Recipe = () => {

    const { recipe, ingredients, setIngredients, setShoppingList } = useContext(ForkiFyContext);

    useEffect(() => {
        if(recipe?.ingredients){
            setIngredients(parseIngredients(recipe.ingredients))
        }
    },[recipe])

    if(!recipe) return <div className="recipe"></div>

    return(
        <div className="recipe">
            <figure className="recipe__fig">
                <img src={recipe.image_url} alt={recipe.title} className="recipe__img"/>
                <h1 className="recipe__title">
                    <span>{recipe.title}</span>
                </h1>
            </figure>
            <div className="recipe__details">
                <div className="recipe__info">
                    <svg className="recipe__info-icon">
                        <use href="img/icons.svg#icon-stopwatch"></use>
                    </svg>
                    <span className="recipe__info-data recipe__info-data--minutes">45</span>
                    <span className="recipe__info-text"> minutes</span>
                </div>
                <div className="recipe__info">
                    <svg className="recipe__info-icon">
                        <use href="img/icons.svg#icon-man"></use>
                    </svg>
                    <span className="recipe__info-data recipe__info-data--people">4</span>
                    <span className="recipe__info-text"> servings</span>

                    <div className="recipe__info-buttons">
                        <button className="btn-tiny">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-minus"></use>
                            </svg>
                        </button>
                        <button className="btn-tiny">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-plus"></use>
                            </svg>
                        </button>
                    </div>

                </div>
                <button className="recipe__love">
                    <svg className="header__likes">
                        <use href="img/icons.svg#icon-heart-outlined"></use>
                    </svg>
                </button>
            </div>
            <div className="recipe__ingredients">
                <ul className="recipe__ingredient-list">
                    {
                        !!ingredients.length && ingredients.map((el,index) => (
                            <li key={index} className="recipe__item">
                                <svg className="recipe__icon">
                                    <use href="img/icons.svg#icon-check"></use>
                                </svg>
                                <div className="recipe__count">{el.count}</div>
                                <div className="recipe__ingredient">
                                    <span className="recipe__unit">{el.unit}</span>
                                    {el.ingredient}
                                </div>
                            </li>
                        ))
                    }
                </ul>

                <button className="btn-small recipe__btn" onClick={() => setShoppingList(ingredients)}>
                    <svg className="search__icon">
                        <use href="img/icons.svg#icon-shopping-cart"></use>
                    </svg>
                    <span>Add to shopping list</span>
                </button>
            </div>
            <div className="recipe__directions">
                <h2 className="heading-2">How to cook it</h2>
                <p className="recipe__directions-text">
                    This recipe was carefully designed and tested by 
                    <span className="recipe__by">{` ${recipe.publisher}`}</span>. Please check out directions at their website.
                </p>
                <a className="btn-small recipe__btn" href={recipe.publisher_url} rel="noreferrer" target="_blank">
                    <span>Directions</span>
                    <svg className="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>

                </a>
            </div>
        </div>
    )
}

export default Recipe;