import LogoType from "../Header/images/LogoMarket.png";
import Whatsapp from "../Header/Icons/whatsapp.svg";
import Facebook from "../Header/Icons/facebook.svg";
import Instagram from "../Header/Icons/instagram.svg";
import { ButtonCart, Container, Logo, Search } from "./style";
import { useCart } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
    const cart = useCart()
    const productsCount = Object.keys(cart.cart).length
  return (
    <Container>
      <div className="logo">
          <Link to="/">
             <Logo src={LogoType} alt="logo" />
          </Link>
      </div>

      <div className="search">
        <Search type="search" name="search" id="" />
      </div>
      <div>
          <Link to="/login">
            <h1>Entrar ou se cadastrar</h1>
          </ Link>
      </div>
      <div className="icons">
        <img src={Whatsapp} alt="facebook" />
        <img src={Facebook} alt="instagran" />
        <img src={Instagram} alt="whatsapp" />
      </div>
     <div>
         <Link to="/carrinho">
         <ButtonCart>
            {productsCount > 0 && <span>({productsCount})</span> }
        </ButtonCart>
         </Link>
        
     </div>
      
    </Container>
  );
};

export default Header;
