import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
    return (
        <>
            {products && products.length > 0 ? (
                <div className="row g-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <Link
                                to={`/detail/${product.id}`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                                className="h-100 d-block">
                                <Item {...product} />
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Sin productos</p>
            )}
        </>
    );
};
