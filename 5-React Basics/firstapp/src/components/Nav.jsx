import { Link } from "react-router-dom";

function Nav(){
    const cardData={ a:"First card's h2", b:"First card's h3"}
    return(
        <nav>
            <ul>
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link"  to="/Form">Contact</Link></li>
            <li><Link className="nav-link"  to="/Card" state={cardData}>Blog</Link></li>
            <li><Link className="nav-link"  to="/FeaturedFoodList" >E-Store</Link></li>
            <li><Link className="nav-link"  to="/Goals">GiftCard</Link></li>
            <li><Link className="nav-link"  to="/About">About</Link></li>
            <li><Link className="nav-link"  to="/Develop">Under-Development</Link></li>
            
            </ul>
        </nav>
    );
};
export default Nav;