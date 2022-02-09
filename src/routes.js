import React from "react";
import { BrowserRouter, Route, Routes  } from "react-router-dom";

import Catalog from './pages/Catalog'
import PageCart from './pages/PageCart'





const MyRoutes = () => {
    return(
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element= {<Catalog />}/>
    <Route  path="/carrinho" element= {<PageCart />}/>

          
    </Routes>
        
    </BrowserRouter>
)
}
export default MyRoutes