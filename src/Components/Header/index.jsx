 import LogoType from '../Header/images/LogoMarket.png'
 import Whatsapp from '../Header/Icons/whatsapp.svg'
 import Facebook from '../Header/Icons/facebook.svg'
 import Instagram from '../Header/Icons/instagram.svg'
import { Container, Logo, Search } from './style'
 

 const Header = () =>(
   
   <Container>
        <div className="logo">
            < Logo src={LogoType} alt="logo"  />
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
   </Container>
   

)

export default Header