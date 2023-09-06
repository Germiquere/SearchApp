import { useEffect, useState } from "react";
import { ElicommerceLayout } from "../layout/ElicommerceLayout";
import { useParams } from "react-router-dom";
import { getItemById } from "../../api/getItemById";
import ProductPictures from "../components/Main/ProductPictures";

export const ItemDetail = () => {
    const [currentPicture, setCurrentPicture] = useState(0);
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
    console.log(product);
    return (
        <ElicommerceLayout>
            {!loading && (
                <div className="bg-white flex flex-col max-w-4xl mx-auto">
                    <div className="flex flex-row">
                        <ProductPictures
                            product={product}
                            setCurrentPicture={setCurrentPicture}
                            currentPicture={currentPicture}
                        />
                        <div className="flex-1 flex justify-center">
                            <div className="w-96 h-[520px]">
                                <img
                                    className="w-full h-full object-contain"
                                    src={product.pictures[currentPicture].url}
                                    alt={product.title}
                                />
                            </div>
                        </div>
                        <div className="flex-2">
                            <div className="border-2 p-5 m-4 rounded-md flex flex-col gap-3">
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
                                    {product.price.toLocaleString("es-AR", {
                                        style: "currency",
                                        currency: product.currency_id,
                                    })}
                                </p>
                                <p>
                                    {product.available_quantity === 1
                                        ? "¡Última disponible!"
                                        : "Stock Disponible"}
                                </p>
                                {product.available_quantity > 1 && (
                                    <p>
                                        Cantidad: {product.available_quantity}
                                    </p>
                                )}
                                <button>Comprar ahora</button>
                                <button>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Descripcion del producto</h3>
                        {/* TODO: hacer el fetch al endpoint de la descripcion */}
                        <p>una descripcion statica por ahora</p>
                    </div>
                </div>
            )}
        </ElicommerceLayout>
    );
};
