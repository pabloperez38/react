import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { useState } from "react";
import "./Nav.css";

export const Nav = () => {
    const { getTotalItems } = useCartContext();
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>
                    Mi Tienda
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded={open ? "true" : "false"}
                    aria-label="Toggle navigation"
                    onClick={() => setOpen((v) => !v)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`collapse navbar-collapse${open ? " show" : ""}`}
                    id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       
                        <li className="nav-item">
                            <Link className="nav-link" to={"/category/tablet"}>
                                Tablets
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to={"/category/televisor"}>
                                Televidores
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to={"/category/smartphone"}>
                                Smartphone
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <Link
                            className="btn btn-outline-primary me-2"
                            to={"/carrito"}>
                            Carrito
                        </Link>
                        {getTotalItems() > 0 && (
                            <span className="span-cart">{getTotalItems()}</span>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};
