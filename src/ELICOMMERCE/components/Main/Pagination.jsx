import queryString from "query-string";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Pagination = () => {
    const [productNumbers, setProductNumbers] = useState(1);
    const location = useLocation();
    const { search } = queryString.parse(location.search);
    const navigate = useNavigate();

    const handleSum = () => {
        const newProductNumbers = productNumbers + 50;
        setProductNumbers(newProductNumbers);
        console.log(search);
        const parts = search.split("_");
        console.log(parts);
        const newPart = parts[0];
        console.log(newPart);
        navigate(`/items?search=${newPart}_Desde_${newProductNumbers}`);
    };
    const handleRest = () => {
        const newProductNumbers = productNumbers - 50;
        setProductNumbers(newProductNumbers);
        console.log(search);
        const parts = search.split("_");
        console.log(parts);
        const newPart = parts[0];
        console.log(newPart);
        navigate(`/items?search=${newPart}_Desde_${newProductNumbers}`);
    };

    useEffect(() => {}, [handleRest, handleSum]);
    return (
        <div className="">
            <nav className="flex">
                <button onClick={handleRest}>
                    <span>
                        <i className="fa-solid fa-chevron-left"></i>
                    </span>
                    <span>Anterior</span>
                </button>
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
