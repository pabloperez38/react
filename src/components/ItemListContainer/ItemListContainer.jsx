import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error al cargar productos");
                }
                return res.json();
            })
            .then((data) => {
                if (category) {
                    setProducts(
                        data.filter((product) => product.category === category)
                    );
                } else {
                    setProducts(data);
                }
            })
            .catch((error) =>
                console.error("Error obteniendo productos:", error)
            );
    }, [category]);

    return (
        <section>
            <div className="container">
                <ItemList products={products} />
            </div>
        </section>
    );
};
