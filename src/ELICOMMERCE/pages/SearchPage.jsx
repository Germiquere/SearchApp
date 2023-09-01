import React from "react";
import { ElicommerceLayout } from "../layout/ElicommerceLayout";
import carrousel1 from "../../assets/carrousel1.webp";

export const SearchPage = () => {
    return (
        <ElicommerceLayout>
            <section className="min-h-screen">
                <div className="text-center flex flex-col gap-8">
                    <h2 className="text-5xl text-lupa">BUSCA TUS PRODUCTOS</h2>
                    <i className="fa-solid fa-shop text-9xl text-lupa"></i>
                </div>
            </section>
        </ElicommerceLayout>
    );
};
