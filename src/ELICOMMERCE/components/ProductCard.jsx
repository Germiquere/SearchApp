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
            <div className="border-b">
                <p>{title}</p>
                <p>{price}</p>
                <p>{seller_address.state.name}</p>
                <img src={thumbnail} alt={title} />
            </div>
        </Link>
    );
};
