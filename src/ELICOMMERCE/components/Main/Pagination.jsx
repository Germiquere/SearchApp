import queryString from "query-string";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Pagination = ({ products }) => {
    // const [productNumbers, setProductNumbers] = useState(1);
    const location = useLocation();
    const [actualPage, setActualPage] = useState(1);
    const { search, offset } = queryString.parse(location.search);
    const navigate = useNavigate();

    const { total } = products.paging;
    const totalPages = Math.ceil(total / 50);

    const handleSum = () => {
        // const newProductNumbers = productNumbers + 50;
        // setProductNumbers(newProductNumbers);
        // console.log(search);
        // const parts = search.split("_");
        // console.log(parts);
        // const newPart = parts[0];
        // console.log(newPart);
        // navigate(`/items?search=${newPart}_Desde_${newProductNumbers}`);
        // const newOffset = offset + 50;
        // setOffset(newOffset);
        navigate(`/items?search=${search}&offset=${parseInt(offset) + 50}`);
        if (actualPage < totalPages) {
            setActualPage(actualPage + 1);
        }
    };
    const handleRest = () => {
        if (parseInt(offset) === 0) return;
        navigate(`/items?search=${search}&offset=${parseInt(offset) - 50}`);
        setActualPage(actualPage - 1);
    };

    useEffect(() => {}, [handleRest, handleSum]);
    return (
        <div className="flex justify-center mt-8">
            <nav className="">
                <ul className="flex flex-row list-none gap-2">
                    {parseInt(offset) !== 0 && (
                        <button
                            onClick={handleRest}
                            className="flex gap-1 text-borderColor p-2 hover:bg-nextGray rounded-sm"
                        >
                            <span>
                                <i className="fa-solid fa-chevron-left"></i>
                            </span>
                            <span>Anterior</span>
                        </button>
                    )}
                    <li className="py-2 bg-nextGray w-9 h-9 text-center font-semibold">
                        <span>{actualPage} </span>
                    </li>
                    <li className="py-2">de</li>
                    <li className="py-2">
                        <span>{totalPages}</span>
                    </li>
                    {actualPage !== totalPages && (
                        <button
                            onClick={handleSum}
                            className="flex gap-1 text-borderColor hover:bg-nextGray p-2 rounded-sm"
                        >
                            <span>Siguiente</span>
                            <span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </span>
                        </button>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
