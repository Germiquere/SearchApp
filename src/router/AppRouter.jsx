import { Route, Routes } from "react-router-dom";
import { EliCommerceRoutes } from "../ELICOMMERCE/routes/EliCommerceRoutes";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<EliCommerceRoutes />} />
        </Routes>
    );
};
