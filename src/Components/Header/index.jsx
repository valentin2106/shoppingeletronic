import LogoType from "../Header/images/LogoMarket.png";
import Whatsapp from "../Header/Icons/whatsapp.svg";
import Facebook from "../Header/Icons/facebook.svg";
import Instagram from "../Header/Icons/instagram.svg";
import { ButtonCart, Container, Logo, Search } from "./style";
import { useCart } from "../CartContext/CartContext";

const Header = () => {
    const cart = useCart()
    const productsCount = Object.keys(cart.cart).length
  return (
    <Container>
      <div className="logo">
        <Logo src={LogoType} alt="logo" />
      </div>

      <div className="search">
        <Search type="search" name="search" id="" />
      </div>
      <div>
        <h1>Entrar ou se cadastrar</h1>
      </div>
      <div className="icons">
        <img src={Whatsapp} alt="facebook" />
        <img src={Facebook} alt="instagran" />
        <img src={Instagram} alt="whatsapp" />
      </div>
      <div>
        <ButtonCart>
            {productsCount > 0 && <span>({productsCount})</span> }
        </ButtonCart>
     </div>
    </Container>
  );
};

export default Header;
