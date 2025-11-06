const BASE_URL = "https://6900bc05ff8d792314bb362d.mockapi.io/products";

export const createProduct = async (product) => {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        throw new Error("Error al crear el producto");
    }

    const data = await response.json();
    return data;
};
