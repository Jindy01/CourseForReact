import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import CarDetail from "../car-detail/CarDetail";

const Routers = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<CarDetail/>} path=""/>
            <Route path="*" element={<div> Not Found</div>} />
        </Routes>
    </BrowserRouter>
}

export default Routers;