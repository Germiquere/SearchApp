import React from "react";
import { Header } from "../components/header/Header";

export const ElicommerceLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="bg-bgMain py-24 min-h-screen">{children}</main>
        </>
    );
};
