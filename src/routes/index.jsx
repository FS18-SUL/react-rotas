import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    );
}
 
export default Paths;