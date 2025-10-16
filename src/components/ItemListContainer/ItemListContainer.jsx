import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error al cargar productos");
                }
                return res.json();
            })
            .then((data) => setProducts(data))
            .catch((error) =>
                console.error("Error obteniendo productos:", error)
            );
    }, []);

    return (
        <section>
            <h1>Tienda</h1>
            <ItemList products={products} />
        </section>
    );
};
