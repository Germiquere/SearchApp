import React, { useEffect, useState } from "react";
import { ElicommerceLayout } from "../layout/ElicommerceLayout";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { getItemsByName } from "../../api/getItemsByName";
import { ProductCard } from "../components/ProductCard";
export const ItemsPage = () => {
    const location = useLocation();
    console.log(location);
    const { search } = queryString.parse(location.search);

    const [searching, setSearching] = useState(search);
    const [products, setProducts] = useState([]);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setSearching(search);
    }, [search]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const dataFetch = await getItemsByName(search);

                setProducts(dataFetch);
                // setData(dataFetch);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [searching]);

    return (
        <ElicommerceLayout>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                products.results.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))
            )}
        </ElicommerceLayout>
    );
};
// obteniendo el nombre de cada categoria
// const namesArray = dataFetch.filters?.flatMap((filter) =>
//     filter.values.flatMap((value) =>
//         value.path_from_root.map((item) => item.name)
//     )
// );
// console.log(namesArray);
// const newData = {
//     author: {
//         name: "German",
//         lastname: "Miquere",
//     },
//     // categories: namesArray,
//     items: dataFetch.results,
// };
// setData(newData);
