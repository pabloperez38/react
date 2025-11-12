import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { validateLogin } from "../../utils/validateLogin";

export const Login = () => {
    const [userForm, setUserForm] = useState({ name: "", password: "" });
    const [loading, setLoading] = useState();
    const { user, login } = useAuthContext();
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    if (user) {
        return <Navigate to={"/admin/alta-productos"} />;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);

        const newErrors = validateLogin({ ...userForm });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            const success = login(userForm.name, userForm.password);
            if (success) {
                navigate("/admin/alta-productos");
            } else {
                setErrors({ general: "Credenciales incorrectas" });
            }
        } catch (error) {
            setErrors({ general: error.message });
            setUserForm({ name: "", password: "" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <div>
                <label htmlFor="name">Usuario</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={userForm.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={userForm.password}
                    onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            {errors.general && <p className="error">{errors.general}</p>}
            <button className="btn" type="submit" disabled={loading}>
                {loading ? "Ingresando..." : "Ingresar"}
            </button>
        </form>
    );
};
