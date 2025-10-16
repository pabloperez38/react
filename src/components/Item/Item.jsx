export const Item = ({ name, price, description, imageUrl, children }) => {
    return (
        <div className="card h-100">
            <img
                src={imageUrl}
                className="card-img-top"
                alt={description}
                loading="lazy"
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{name}</h5>
                <p className="card-text" style={{ fontWeight: 700 }}>
                    ${price}
                </p>
                <p className="card-text text-muted">{description}</p>
                <div className="mt-auto">{children}</div>
            </div>
        </div>
    );
};
