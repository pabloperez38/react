import "./Footer.css";
export const Footer = () => {
    return (
        <footer className="footer bg-dark text-white text-center py-4 mt-5 w-100">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-icon mb-2">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" fill="#0d6efd" />
                            <text
                                x="16"
                                y="21"
                                textAnchor="middle"
                                fontSize="16"
                                fill="#fff"
                                fontFamily="Arial"
                                fontWeight="bold">
                                🛒
                            </text>
                        </svg>
                    </div>
                    <div className="footer-title mb-1">Mi Tienda</div>
                    <div className="footer-copy mb-1">
                        © 2025 Mi Tienda. Todos los derechos reservados.
                    </div>
                    <div className="footer-year">
                        Hecho con ♥ en React + Bootstrap
                    </div>
                </div>
            </div>
        </footer>
    );
};
