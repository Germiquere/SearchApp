import { Link } from "react-router-dom";

const Pagination = () => {
    return (
        <div className="">
            <nav className="flex">
                <Link to="">
                    <span>
                        <i className="fa-solid fa-chevron-left"></i>
                    </span>
                    <span>Anterior</span>
                </Link>
                <li>
                    <span>paginaActual </span>
                    de
                </li>
                <li>
                    <span> totalDePagina</span>
                </li>
                <Link to="">
                    <span>
                        <i className="fa-solid fa-chevron-right"></i>
                    </span>
                    <span>Siguiente</span>
                </Link>
            </nav>
        </div>
    );
};

export default Pagination;
