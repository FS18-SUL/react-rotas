import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import NotFound from "../pages/NotFound";
import SiteLayout from "../layouts/SiteLayout";
import Produtos from "../pages/Produtos";
import Produto from "../pages/Produto";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SiteLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/produtos" element={<Produtos />} />
                        <Route path="/produtos/:item" element={<Produto />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;