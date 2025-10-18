import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <CartProvider>
                    <Nav />
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<ItemListContainer />} />
                            <Route
                                path="/detail/:id"
                                element={<ItemDetailContainer />}
                            />
                        </Routes>
                    </div>
                    <Footer />
                </CartProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
