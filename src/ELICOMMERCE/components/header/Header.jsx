import React from "react";
import { useForm } from "../../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
    const { search, onInputChange } = useForm({ search: "" });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.length === 0) return;

        navigate(`/items?search=${search}`);
    };
    return (
        <header className="flex justify-between max-w-lg mx-auto ">
            <Link to="/">
                <h1>LOGO</h1>
            </Link>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Buscar productos,marcas y mas..."
                    name="search"
                    value={search}
                    onChange={onInputChange}
                    autoComplete="off"
                />
                <button>🔍</button>
            </form>
        </header>
    );
};
