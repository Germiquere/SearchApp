import React from "react";
import { Header } from "../components/header/Header";
import Pagination from "../components/Main/Pagination";

export const ElicommerceLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="bg-bgMain py-24">
                {children}
                <Pagination />
            </main>
        </>
    );
};
