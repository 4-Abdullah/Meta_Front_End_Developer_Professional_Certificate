import { Link } from "react-router-dom";
import Logo from '../Asset 14@4x.png';

const Footer=()=>{
    const cardData={ a:"First card's h2", b:"First card's h3"}
    const handleClick=(anchor)=>(event)=>{
        event.preventDefault();
          const id = `${anchor}-section`;
          const element = document.getElementById(id);
          if(element) {
              element.scrollIntoView({
                  behavior:"smooth",
                  block:"start"
              })
          }
      }
    return(
        <footer className='Footer'>
            <br/>
            <div className='Footer-heading' >
            <img src={Logo} alt='Logo' width={180} height={100}/> 
            
            <div className='Doormat-navigation'>
            <Link className='Footer-link' to="/">Home</Link>
            <Link className='nav-link'  to="/#About" onClick={handleClick('About')}>About</Link>
            <Link className='Footer-link' to="/Menu" state={cardData}>Menu</Link>
            <Link className='Footer-link' to="/Bookingform" >Reservations</Link>
            <Link className='Footer-link' to="/Order">Order online</Link>
            <Link className='Footer-link' to="/Login">Login</Link> 
            </div>
            <div className='Main-Footer'>
                <div>Address</div>
                <div>Phone number</div>
                <div>Email</div>
            </div>
            <div className='Main-Footer'>
                <a className='Footer-link' href="https://www.facebook.com/">Facebook</a>
                <a className='Footer-link' href="https://m.twitter.com/">Twitter</a>
                <a className='Footer-link' href='https://www.instagram.com/'>Instagram</a>
            </div>
            </div>
        </footer>
    )
}

export default Footer