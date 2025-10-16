import { useCartContext } from "../../context/CartContext/useCartContext";

export const ItemDetail = ({ detail }) => {
    const { addItem } = useCartContext();
    if (!detail) return <p>Producto no encontrado</p>;
    return (
        <section className="item-detail">
            <div>
                <img src={detail.imageUrl} alt={detail.description} />
            </div>
            <div className="meta">
                <h1 className="product-title">{detail.name}</h1>
                <p style={{ fontWeight: 700, fontSize: "1.25rem" }}>
                    ${detail.price}
                </p>
                <p>{detail.description}</p>
                <div style={{ marginTop: "1rem" }}>
                    <button
                        onClick={() => {
                            addItem(detail);
                        }}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </section>
    );
};
