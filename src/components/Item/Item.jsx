import "./Item.css";
export const Item = ({ name, price, description, imageUrl, children }) => {
    return (
        <div className="card h-100 app-card">
            <div className="price-badge">${price}</div>
            <img
                src={imageUrl}
                className="card-img-top"
                alt={description}
                loading="lazy"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%23e9ecef"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23909" font-family="Arial, Helvetica, sans-serif" font-size="20">Imagen no disponible</text></svg>';
                }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{name}</h5>
                <p className="product-description">{description}</p>
                <div className="mt-3 d-flex flex-column flex-sm-row justify-content-between align-items-stretch gap-2">                
                    <div className="d-flex align-items-center">{children}</div>
                </div>
            </div>
        </div>
    );
};
