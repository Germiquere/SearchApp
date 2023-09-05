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
    console.log(product.currency_id);
    return (
        <ElicommerceLayout>
            <div className="bg-white flex flex-col max-w-4xl mx-auto">
                <div className="flex flex-row">
                    <div className="flex-1 flex justify-center">
                        <div className="w-96">
                            <img
                                className="w-full "
                                src={product.thumbnail}
                                alt={product.title}
                            />
                        </div>
                    </div>
                    <div className="flex-2">
                        <div className="border p-5 m-4 rounded-md flex flex-col gap-3">
                            <div>
                                <p>
                                    {product.condition === "new"
                                        ? "Nuevo"
                                        : "Usado"}{" "}
                                    | {product.sold_quantity} vendidos
                                </p>
                            </div>
                            <h2>{product.title}</h2>
                            <p>
                                {!loading &&
                                    product.price.toLocaleString("es-AR", {
                                        style: "currency",
                                        currency: product.currency_id,
                                    })}
                            </p>
                            <button>COMPRAR</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Descripcion del producto</h3>
                    {/* TODO: hacer el fetch al endpoint de la descripcion */}
                    <p>una descripcion statica por ahora</p>
                </div>
            </div>
        </ElicommerceLayout>
    );
};
