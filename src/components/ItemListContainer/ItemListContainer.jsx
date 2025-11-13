import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        getProducts(category)
            .then((data) => setProducts(data))
            .catch((error) =>
                console.error("Error obteniendo productos:", error)
            );
    }, [category]);

    return (
        <section>
            <div className="container">
                {category && (
                    <h1 className="mb-4 text-capitalize text-primary">
                        {category}
                    </h1>
                )}
                <ItemList products={products} />
            </div>
        </section>
    );
};
