import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import NotFound from "../pages/NotFound";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
 
export default Paths;