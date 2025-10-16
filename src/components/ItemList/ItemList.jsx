import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
    return (
        <>
            {products && products.length > 0 ? (
                products.map((product) => (
                    <Link to={`/detail/${product.id}`} key={product.id}>
                        <Item {...product} />
                    </Link>
                ))
            ) : (
                <p>Sin productos</p>
            )}
        </>
    );
};
