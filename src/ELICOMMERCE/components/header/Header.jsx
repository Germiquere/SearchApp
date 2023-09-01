import React, { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import logoMeli from "../../../assets/logo-mercado-liebre.png";

export const Header = () => {
    const [isFocus, setIsFocus] = useState(false);
    const { search, onInputChange } = useForm({ search: "" });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.length === 0) return;

        navigate(`/items?search=${search}`);
    };

    const handleFocus = () => {
        setIsFocus(!isFocus);
    };

    const inFocus =
        "flex justify-between items-center gap-2 overflow-hidden rounded-sm bg-white border border-borderColor w-[580px] shadow-lg";
    const outFocus =
        "flex justify-between items-center gap-2 overflow-hidden rounded-sm bg-white w-[580px] shadow";
    return (
        <header className="container bg-mlColor flex justify-around max-w-full h-28 p-3">
            <div className="flex gap-10 w-auto h-10">
                <Link to="/">
                    <div className="w-32 pt-1">
                        <img
                            // className="w-auto"
                            src={logoMeli}
                            alt="logo de mercado liebre"
                        />
                    </div>
                </Link>
                <form
                    onSubmit={handleSubmit}
                    onFocus={handleFocus}
                    onBlur={handleFocus}
                    className={isFocus ? inFocus : outFocus}
                >
                    <input
                        className="outline-none p-3 flex-1"
                        type="text"
                        placeholder="Buscar productos,marcas y mas..."
                        name="search"
                        value={search}
                        onChange={onInputChange}
                        autoComplete="off"
                    />
                    <div className="h-full">
                        <button className=" before:content-[''] before:absolute before:w-px before:h-3/5 before:top-[20%] before:left-0 before:bg-slate-300 w-9 h-full relative">
                            <i className="fa-solid fa-magnifying-glass text-lupa font-semibold"></i>
                        </button>
                    </div>
                </form>
            </div>
        </header>
    );
};
