import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
    const [userForm, setUserForm] = useState({ name: "", password: "" });
    const { user, login } = useAuthContext();
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

        const success = login(userForm.name, userForm.password);
        if (success) {
            navigate("/admin/alta-productos");
        } else {
            alert("Credenciales incorrectas");
            setUserForm({ name: "", password: "" });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <div>
                <label htmlFor="name">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={userForm.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="password">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={userForm.password}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button className="btn btn-info" type="submit">Iniciar sesión</button>
        </form>
    );
};
