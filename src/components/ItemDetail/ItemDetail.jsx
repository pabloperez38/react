import { useCartContext } from "../../context/CartContext/useCartContext";
import { Count } from "../Count/Count";
import "./ItemDetail.css";

export const ItemDetail = ({ detail }) => {
    const { addItem } = useCartContext();

    const handleAdd = (quantity) => {
        addItem({ ...detail, quantity });
    };

    if (!detail) return <p>Producto no encontrado</p>;
    return (
      
        <section>
            <div className="container">
                <div className="row align-items-start item-detail">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <img
                            src={detail.imageUrl}
                            alt={detail.description}
                            className="img-fluid rounded"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%23e9ecef"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23909" font-family="Arial, Helvetica, sans-serif" font-size="20">Imagen no disponible</text></svg>';
                            }}
                        />
                    </div>
                    <div className="col-12 col-md-6 meta">
                        <h1 className="product-title">{detail.name}</h1>
                        <p className="detail-price">${detail.price}</p>
                        <p>{detail.description}</p>
                        <div className="detail-btns">
                           
                            <Count                             
                                btnText={"Agregar al carrito"}
                                onConfirm={handleAdd}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
