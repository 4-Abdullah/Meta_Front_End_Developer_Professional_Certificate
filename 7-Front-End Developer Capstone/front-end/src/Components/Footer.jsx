import { Link } from "react-router-dom";
import Logo from '../Asset 14@4x.png';

const Footer=()=>{
    const cardData={ a:"First card's h2", b:"First card's h3"}

    return(
        <footer className='Footer'>
            <div className='Footer-heading'>
                <h4>Logo</h4>
                <h4 className='Footer-space'>Doormat navigation</h4>
                <h4>Contact details</h4>
                <h4>Social media links</h4>
            </div>
            <div className='Footer-heading' >
            <img src={Logo} alt='Logo' width={180} height={150}/> 
            
            <div className='Doormat-navigation'>
            <Link className='Footer-link' to="/">Home</Link>
            <Link className='Footer-link' to="/Form">About</Link>
            <Link className='Footer-link' to="/Card" state={cardData}>Menu</Link>
            <Link className='Footer-link' to="/FeaturedFoodList" >Reservations</Link>
            <Link className='Footer-link' to="/Goals">Order online</Link>
            <Link className='Footer-link' to="/About">Login</Link> 
            </div>
            <div className='Main-Footer'>
                <div>Address</div>
                <div>Phone number</div>
                <div>Email</div>
            </div>
            <div className='Main-Footer'>
                <a href="https://www.facebook.com/">Facebook</a>
                <a href="https://m.twitter.com/">Twitter</a>
                <a href='https://www.instagram.com/'>Instagram</a>
            </div>
            </div>
        </footer>
    )
}

export default Footer