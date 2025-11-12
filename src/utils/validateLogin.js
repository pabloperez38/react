export const validateLogin = (user) => {
    const errors = {};

    if (!user.name || user.name.trim() === "") {
        errors.name = "El usuario es obligatorio.";
    }
    if (!user.password || user.password.trim() === "") {
        errors.password = "La contraseña es obligatoria.";
    }

    return errors;
};
