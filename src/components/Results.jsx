import { useContext } from "react";
import { ForkiFyContext } from "../App";
import { limitRecipeTitle } from "../utils";


const Results = () => {

    const { searchResult, setRecipe } = useContext(ForkiFyContext);

    const linkHandler = async (id) => {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`) 
        const data = await res.json();

        setRecipe(data.recipe)
    }

    return(
        <div className="results">
            <ul className="results__list">
                {
                    searchResult.map((el, index) => (
                        <li key={index} onClick={() => linkHandler(el.recipe_id)}>
                            <a className="results__link" href="#"> {/* results__link--active */}
                                <figure className="results__fig">
                                    <img src={el.image_url} alt={el.title}/>
                                </figure>
                                <div className="results__data">
                                    <h4 className="results__name">{limitRecipeTitle(el.title)}</h4>
                                    <p className="results__author">{el.publisher}</p>
                                </div>
                            </a>
                        </li>
                    ))
                }
            </ul>

            <div className="results__pages">
                <button className="btn-inline results__btn--prev">
                    <span>Page 1</span>
                    <svg className="search__icon">
                        <use href="img/icons.svg#icon-triangle-left"></use>
                    </svg>
                </button>
                <button className="btn-inline results__btn--next">
                    <span>Page 3</span>
                    <svg className="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Results;