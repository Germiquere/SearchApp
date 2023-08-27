import React from "react";
import { Header } from "../components/header/Header";

export const ElicommerceLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="max-w-lg mx-auto">{children}</main>
        </>
    );
};
