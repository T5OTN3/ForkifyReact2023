import { useContext } from "react";
import { ForkiFyContext } from "../App";
import { limitRecipeTitle } from "../utils";



const Like = () => {

    const { likeList, setRecipe } = useContext(ForkiFyContext);

    const linkHandler = async (id) => {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`) 
        const data = await res.json();

        setRecipe(data.recipe)
    }

    if(!likeList.length) return <div></div>

    return(
        <div className="likes">
            <div className="likes__field">
                <svg className="likes__icon">
                    <use href="img/icons.svg#icon-heart"></use>
                </svg>
            </div>
            <div className="likes__panel">
                <ul className="likes__list">
                    {
                        likeList.map((el, index) => (
                        <li key={index} onClick={() => linkHandler(el.id)}>
                            <a className="likes__link" href="#">
                                <figure className="likes__fig">
                                    <img src={el.img} alt={el.title}/>
                                </figure>
                                <div className="likes__data">
                                    <h4 className="likes__name">{limitRecipeTitle(el.title)}.</h4>
                                    <p className="likes__author">{el.publisher}</p>
                                </div>
                            </a>
                        </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Like;