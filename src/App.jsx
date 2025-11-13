import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Footer } from "./components/Footer/Footer";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <CartProvider>
                    <div className="container">
                        <Routes>
                            <Route element={<MainLayout />}>
                                <Route
                                    path="/"
                                    element={<ItemListContainer />}
                                />
                                <Route
                                    path="/category/:category"
                                    element={<ItemListContainer />}
                                />
                                <Route
                                    path="/detail/:id"
                                    element={<ItemDetailContainer />}
                                />
                                <Route path="/carrito" element={<Cart />} />
                            </Route>

                            <Route path="/admin" element={<AdminLayout />}>
                                <Route index element={<Login />} />
                                <Route
                                    path="alta-productos"
                                    element={
                                        <RutaProtegida>
                                            <ProductFormContainer />
                                        </RutaProtegida>
                                    }
                                />
                            </Route>
                        </Routes>
                    </div>
                    <Footer />
                </CartProvider>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}

export default App;
