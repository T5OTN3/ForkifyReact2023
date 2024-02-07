import { useContext, useEffect, useState } from "react";
import { ForkiFyContext } from "../App";


const Pagination = () => {

    const { resPerPage, setStartPage, setEndPage, searchResult } = useContext(ForkiFyContext);

    const [ page, setPage ] = useState(1);

    const prevHandler = () => {
        page > 1 && setPage(value => value - 1);
    }

    const nextHandler = () => {
        setPage(value => value + 1)
    }

    useEffect(() => {
        setStartPage((page - 1) * resPerPage);
        setEndPage(page * resPerPage)
    }, [page])

    if(!searchResult.length) return <></>

    return(
        <div className="results__pages">
            {
                page !== 1 && 
                <button className="btn-inline results__btn--prev" onClick={() => prevHandler()}>
                    <span>Page {page - 1}</span>
                    <svg className="search__icon">
                        <use href="img/icons.svg#icon-triangle-left"></use>
                    </svg>
                </button> 
            }
            {
                Math.ceil(searchResult.length / resPerPage) !== page && 
                <button className="btn-inline results__btn--next" onClick={() => nextHandler()}>
                    <span>Page {page + 1}</span>
                    <svg className="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>
                </button>
            }

        </div>
    )
}

export default Pagination;