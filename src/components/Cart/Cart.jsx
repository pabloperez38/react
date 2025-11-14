import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { IoCaretBackCircleSharp } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { BsCartDash } from "react-icons/bs";
import { LuCircleDollarSign } from "react-icons/lu";

import "./Cart.css";

export const Cart = () => {
    const { cart, clearCart, deleteItem, total, chekout } = useCartContext();

    return (
        <div className="cart-container container my-4">
            <h2 className="mb-4">Carrito de Compras</h2>
            {!cart || cart.length === 0 ? (
                <div className="text-center py-5 border rounded bg-light">
                    <p className="mb-3">El carrito está vacío.</p>
                    <Link to="/" className="btn btn-primary">
                        <IoCaretBackCircleSharp />
                        Volver a la tienda
                    </Link>
                </div>
            ) : (
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th className="text-center">
                                            Cantidad
                                        </th>
                                        <th className="text-end">Precio</th>
                                        <th className="text-end">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => (
                                        <tr key={item.id}>
                                            <td style={{ maxWidth: "50%" }}>
                                                {item.name}
                                            </td>
                                            <td className="text-center">
                                                {item.quantity}
                                            </td>
                                            <td className="text-end">
                                                ${Number(item.price).toFixed(2)}
                                            </td>
                                            <td className="text-end">
                                                <button
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() =>
                                                        deleteItem(item.id)
                                                    }>
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 gap-2">
                            <div className="d-flex gap-2">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={clearCart}>
                                    <span>
                                        <BsCartDash />
                                    </span>
                                    Vaciar carrito
                                </button>
                            </div>

                            <div className="mt-2 mt-md-0">
                                <strong>
                                    Total: ${Number(total()).toFixed(2)}
                                </strong>
                            </div>

                            <div className="mt-2 mt-md-0">
                                <button
                                    className="btn btn-primary"
                                    onClick={chekout}>
                                    <LuCircleDollarSign />
                                    Finalizar Compra
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
