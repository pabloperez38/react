import { Link, useNavigate } from "react-router-dom";
import "./ProductFormUI.css";

export const ProductFormUI = ({
    product,
    errors,
    loading,
    onChange,
    onFileChange,
    onSubmit,
    onLogout,
}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate("/");
    };

    return (
        <section>
            <header className="product-form-header">
                <Link to="/">Volver al Home</Link>
                <button type="button" onClick={handleLogout}>
                    Logout
                </button>
            </header>
            <form onSubmit={onSubmit}>
                <div>
                    <h2>Agregar producto</h2>
                    <label htmlFor="name">Nombre</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={product.name}
                        onChange={onChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="price">Precio</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        onChange={onChange}
                        value={product.price}
                    />
                    {errors.price && <p className="error">{errors.price}</p>}
                </div>
                <div>
                    <label htmlFor="category">Categoría</label>
                    <p>(tablet-televisor-smartphone)</p>
                    <input
                        id="category"
                        name="category"
                        type="text"
                        onChange={onChange}
                        value={product.category}
                    />
                    {errors.category && (
                        <p className="error">{errors.category}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="description">Descripción</label>
                    <textarea
                        id="description"
                        name="description"
                        type="text"
                        onChange={onChange}
                        value={product.description}></textarea>
                    {errors.description && (
                        <p className="error">{errors.description}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="image">Imagen</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={(e) =>
                            onFileChange(e.target.files?.[0] ?? null)
                        }
                    />
                    {errors.file && <p className="error">{errors.file}</p>}
                </div>
                <button className="btn" type="submit" disabled={loading}>
                    {loading ? "Guardando..." : "Guardar"}
                </button>
            </form>
        </section>
    );
};
