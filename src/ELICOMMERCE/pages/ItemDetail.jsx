import { useEffect, useState } from "react";
import { ElicommerceLayout } from "../layout/ElicommerceLayout";
import { useParams } from "react-router-dom";
import { getItemById } from "../../api/getItemById";

export const ItemDetail = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const dataFetch = await getItemById(id);

                setProduct(dataFetch);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, []);

    return (
        <ElicommerceLayout>
            <div>
                <div>
                    <img src={product.thumbnail} alt={product.title} />
                </div>
                <div>
                    <div>
                        <p>{product.condition}</p>
                        <p>{product.sold_quantity}</p>
                    </div>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <button>COMPRAR</button>
                </div>
            </div>
            <div>
                <h3>Descripcion del producto</h3>
                {/* TODO: hacer el fetch al endpoint de la descripcion */}
                <p>una descripcion statica por ahora</p>
            </div>
        </ElicommerceLayout>
    );
};
