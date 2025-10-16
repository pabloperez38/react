import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Nav = () => {
    const { getTotalItems } = useCartContext();
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/category/hogar"}>Hogar</Link>
                </li>
                <li>
                    <Link to={"/category/electronica"}>Electrónica</Link>
                </li>
                <li>
                    <Link to={"/category/deportes"}>Deportes</Link>
                </li>
                <li>
                    <Link to={"/cart"}>Carrito</Link>
                    {getTotalItems() > 0 && (
                        <span className="span-cart">{getTotalItems()}</span>
                    )}
                </li>
            </ul>
        </nav>
    );
};
