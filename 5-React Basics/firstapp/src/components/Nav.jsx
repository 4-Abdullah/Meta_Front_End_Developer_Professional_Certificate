import { Link } from "react-router-dom";

function Nav(){
    const cardData={ a:"First card's h2", b:"First card's h3"}
    return(
        <nav class="main-nav">
            <ul>
            <li><Link to="./">Home</Link></li>
            <li><Link to="./Footer">Contact</Link></li>
            <li><Link to="./Card" state={cardData}>Blog</Link></li>
            <li><Link to="./Apples">Articles</Link></li>
            <li><Link to="./About">About</Link></li>
            <li><Link to="./Develop">Under-Development</Link></li>
            </ul>
        </nav>
    );
};
export default Nav;