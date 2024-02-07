import { useContext } from "react";
import { ForkiFyContext } from "../App";
import { limitRecipeTitle } from "../utils";
import Pagination from "./Pagination";


const Results = () => {

    const { searchResult, setRecipe, startPage, endPage } = useContext(ForkiFyContext);

    const linkHandler = async (id) => {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`) 
        const data = await res.json();

        setRecipe(data.recipe)
    }

    console.log(startPage, endPage)

    return(
        <div className="results">
            <ul className="results__list">
                {
                    searchResult.slice(startPage, endPage).map((el, index) => (
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

            <Pagination />
        </div>
    )
}

export default Results;