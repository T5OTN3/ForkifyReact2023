import { useContext, useEffect, useState } from "react";
import { ForkiFyContext } from "../App";



const Header = () => {

    const { searchResult, setSearchResult } = useContext(ForkiFyContext);

    const [value, setValue] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault();
        
        const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${value}`);
        const data = await res.json();

        setSearchResult(data.recipes)
    }

    return(
        <header className="header">
            <img src="img/logo.png" alt="Logo" className="header__logo"/>
            <form className="search" onSubmit={(e) => submitHandler(e)}>
                <input type="text" className="search__field" placeholder="Search over 1,000,000 recipes..." value={value} onChange={(e) => setValue(e.target.value)}/>
                <button className="btn search__btn">
                    <svg className="search__icon">
                        <use href="img/icons.svg#icon-magnifying-glass"></use>
                    </svg>
                    <span>Search</span>
                </button>
            </form>
            <div className="likes">
                <div className="likes__field">
                    <svg className="likes__icon">
                        <use href="img/icons.svg#icon-heart"></use>
                    </svg>
                </div>
                <div className="likes__panel">
                    <ul className="likes__list">
                        {/* <li>
                            <a className="likes__link" href="#23456">
                                <figure className="likes__fig">
                                    <img src="img/test-1.jpg" alt="Test">
                                </figure>
                                <div className="likes__data">
                                    <h4 className="likes__name">Pasta with Tomato ...</h4>
                                    <p className="likes__author">The Pioneer Woman</p>
                                </div>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;