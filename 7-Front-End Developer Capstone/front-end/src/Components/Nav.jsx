import { Link } from "react-router-dom";
import Logo from '../Asset 14@4x.png';

const Nav=()=>{
    const cardData={ a:"First card's h2", b:"First card's h3"}
     
    return(
        <nav>
            <ul>
            <li><Link to="/"><img src={Logo} alt='Logo' width={150} height={30}></img></Link></li>
            <li><Link className='nav-link' to="/">Home</Link></li>
            <li><Link className='nav-link' to="/Form">About</Link></li>
            <li><Link className='nav-link' to="/Card" state={cardData}>Menu</Link></li>
            <li><Link className='nav-link' to="/FeaturedFoodList" >Reservations</Link></li>
            <li><Link className='nav-link' to="/Goals">Order online</Link></li>
            <li><Link className='nav-link' to="/About">Login</Link></li>
            </ul>
        </nav>
     )
} 

export default Nav
