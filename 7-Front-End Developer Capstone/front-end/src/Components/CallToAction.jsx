import { Link } from "react-router-dom";
import Logo from '../Asset 14@4x.png';
import something from '../images/something.jpg';
import BruschettaRezept from '../images/Bruschetta Rezept.jpg';
import salanty from '../images/salanty.jpg';
import salad from '../images/salad.jpg';
import grilledfish from '../images/grilledfish.jpg';
import lahorekarahi from '../images/lahore_karahi-1693344622456_1200x.jpg'

const CallToAction=()=>{

    return(
        <div className='App'>

        <div className='hero-content'>
            <img className='hero-image' src={lahorekarahi} alt='Logo' width={200} height={250}/> 
            <h1 className='hero-heading-1'>Little Lemon<br/><div className="hero-heading-2"> Lahore </div>
            </h1>
            {/* <h1 className="hero-heading-2"> Lahore </h1> */}

            <p>We are a family owned Mediterranean 
restaurant, focuses on traditional recipes
served with a modern twist.</p>      

        <button>Reserve A Table</button></div>
  
        </div>
    )
}

export default CallToAction