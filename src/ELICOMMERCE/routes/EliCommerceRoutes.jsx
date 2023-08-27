import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ItemsPage } from "../pages/ItemsPage";
import { SearchPage } from "../pages/SearchPage";
import { ItemDetail } from "../pages/ItemDetail";

export const EliCommerceRoutes = () => {
    return (
        <Routes>
            {/* TODO: PONER LO DEL QUERY STRING EN ESTA PAGINA */}
            <Route path="/" element={<SearchPage />} />
            <Route path="/items" element={<ItemsPage />} />
            {/* TODO: HACER QUE SEA DINAMICO */}
            <Route path="/items/:id" element={<ItemDetail />} />
            {/* EN CASO DE QUE LA URL NO EXISTE TE LLEVA AL LA RUTA PRINCIPAL */}
            <Route path="/" element={<Navigate to="/" />} />
        </Routes>
    );
};
