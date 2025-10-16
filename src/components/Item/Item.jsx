export const Item = ({ name, price, description, imageUrl, children }) => {
    return (
        <article className="product-item">
            <img src={imageUrl} alt={description} />
            <h2 className="product-title">{name}</h2>
            <p>${price}</p>
            <p>{description}</p>
            {children}
        </article>
    );
};
