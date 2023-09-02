import queryString from "query-string";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Pagination = () => {
    // const [productNumbers, setProductNumbers] = useState(1);
    const location = useLocation();
    const { search, offset } = queryString.parse(location.search);
    const navigate = useNavigate();
    console.log(offset);

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
    };
    const handleRest = () => {
        if (parseInt(offset) === 0) return;
        navigate(`/items?search=${search}&offset=${parseInt(offset) - 50}`);
    };

    useEffect(() => {}, [handleRest, handleSum]);
    return (
        <div className="">
            <nav className="flex flex-row">
                {parseInt(offset) !== 0 && (
                    <button onClick={handleRest}>
                        <span>
                            <i className="fa-solid fa-chevron-left"></i>
                        </span>
                        <span>Anterior</span>
                    </button>
                )}
                <li>
                    <span>paginaActual </span>
                    de
                </li>
                <li>
                    <span> totalDePagina</span>
                </li>
                <button onClick={handleSum}>
                    <span>
                        <i className="fa-solid fa-chevron-right"></i>
                    </span>
                    <span>Siguiente</span>
                </button>
            </nav>
        </div>
    );
};

export default Pagination;
