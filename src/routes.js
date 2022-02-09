import React from "react";
import { BrowserRouter, Route, Routes  } from "react-router-dom";

import Catalog from './pages/Catalog'
import PageLogin from "./pages/PageLogin";
import PageCart from './pages/PageCart'





const MyRoutes = () => {
    return(
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element= {<Catalog />}/>
    <Route  path="/carrinho" element= {<PageCart />}/>
    <Route  path="/login" element= {<PageLogin />}/>


          
    </Routes>
        
    </BrowserRouter>
)
}
export default MyRoutes