import { useContext } from "react";
import { ForkiFyContext } from "../App";


const Shopping = () => {

    const { shoppingList } = useContext(ForkiFyContext);

    if(!shoppingList) return <div className="shopping"></div>

    return(
        <div className="shopping">
            <h2 className="heading-2">My Shopping List</h2>
            <ul className="shopping__list">
                {
                    shoppingList.map((el, index) => (
                        <li key={index} className="shopping__item">
                            <div className="shopping__count">
                                <input type="number" value={el.count} step="100"/>
                                <p>{el.unit}</p>
                            </div>
                            <p className="shopping__description">{el.ingredient}</p>
                            <button className="shopping__delete btn-tiny">
                                <svg>
                                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                                </svg>
                            </button>
                        </li>
                    ))
                }
            </ul>
            <div className="copyright">
                &copy; by Jonas Schmedtmann. Powered by
                <a href="http://food2fork.com" rel="noreferrer" target="_blank" className="link">Food2Fork.com</a>.
            </div>
        </div>
    )
}

export default Shopping;