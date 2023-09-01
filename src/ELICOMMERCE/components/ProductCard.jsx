import { Link } from "react-router-dom";

export const ProductCard = ({
    id,
    price,
    currency_id,
    thumbnail,
    seller_address,
    title,
}) => {
    return (
        <Link to={id}>
            <div className="border-b p-5 flex flex-row gap-3">
                <img className="w-36" src={thumbnail} alt={title} />
                <div className="flex flex-col pt px-3 gap-4">
                    <h2 className="text-letterColor text-xl font-light pt-2">
                        {title}
                    </h2>
                    <p className="text-2xl">
                        {price.toLocaleString("es-AR", {
                            style: "currency",
                            currency: currency_id,
                        })}
                    </p>
                    <p className="text-envioGratis text-sm font-semibold">
                        Envio gratis
                    </p>
                </div>
            </div>
        </Link>
    );
};
