import { useEffect, useState } from "react";
import { ElicommerceLayout } from "../layout/ElicommerceLayout";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { getItemsByName } from "../../api/getItemsByName";
import { ProductCard } from "../components/ProductCard";
import Pagination from "../components/Main/Pagination";
export const ItemsPage = () => {
    const location = useLocation();

    const { search, offset } = queryString.parse(location.search);
    const [searching, setSearching] = useState(search);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setSearching(search);
    }, [search]);

    const fetchProducts = async () => {
        try {
            const dataFetch = await getItemsByName(search, offset);

            setProducts(dataFetch);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, [searching, offset]);

    return (
        <ElicommerceLayout>
            <section className="container mr-auto ml-auto max-w-4xl rounded-sm bg-white">
                {!loading &&
                    products.results.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
            </section>
            {!loading && <Pagination />}
        </ElicommerceLayout>
    );
};
