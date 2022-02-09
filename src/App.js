import { CartProvider } from "./Components/CartContext/CartContext";
import Header from "./Components/Header";
import Products from "./Components/Products";
import MyRoutes from "./routes";

function App() {
  return (
   
    <div className="App">
     <CartProvider>
     <MyRoutes />
     </CartProvider>
    </div>

  );
}

export default App;
