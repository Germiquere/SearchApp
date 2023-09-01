import React, { useEffect, useState } from "react";
import { ElicommerceLayout } from "../layout/ElicommerceLayout";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { getItemsByName } from "../../api/getItemsByName";
import { ProductCard } from "../components/ProductCard";
export const ItemsPage = () => {
    const location = useLocation();

    const { search } = queryString.parse(location.search);
    console.log(search);
    const [searching, setSearching] = useState(search);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setSearching(search);
    }, [search]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const dataFetch = await getItemsByName(search);

                setProducts(dataFetch);
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
            <section className="container mr-auto ml-auto max-w-4xl rounded-sm bg-white">
                {!loading &&
                    products.results.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
            </section>
        </ElicommerceLayout>
    );
};
