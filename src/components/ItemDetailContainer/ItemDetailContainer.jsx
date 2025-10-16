import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error al cargar productos");
                }
                return res.json();
            })
            .then((data) => {
                const product = data.find((item) => item.id === parseInt(id));
                if (product) {
                    setDetail(product);
                } else {
                    throw new Error("Producto no encontrado");
                }
            })
            .catch((error) =>
                console.error("Error obteniendo productos:", error)
            );
    }, [id]);

    return (
        <main>
            {Object.keys(detail).length ? (
                <ItemDetail detail={detail} />
            ) : (
                <p>Cargando...</p>
            )}
        </main>
    );
};
