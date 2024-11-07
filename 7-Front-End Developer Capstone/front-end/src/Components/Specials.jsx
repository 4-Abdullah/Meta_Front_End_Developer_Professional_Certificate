import { Link } from "react-router-dom";
import Logo from '../Asset 14@4x.png';
import something from '../images/something.jpg';
import BruschettaRezept from '../images/Bruschetta Rezept.jpg';
import salanty from '../images/salanty.jpg';
import salad from '../images/salad.jpg';

const Specials=()=>{
    
    return(
        <main className='Specials'>
        <button className='Specials-button'>Online Menu</button>
        <h2>Specials</h2>
        <Card/>
        <br/>
        </main>
    )
}
function Card (){
     
    return(
    <main className='Main-Special'>
        <div className='Card'>
            <img className='Card-Image' src={salad} alt='Logo'/>
            <br/>
            <br/> 

            <div className='Card-header'>
            <div >Greek Salad</div>
            <div>$6</div>
            </div> 
            <p className='Card-Description'>Greek salad is a vibrant and refreshing dish that combines a variety of fresh vegetables with tangy feta cheese and savory olives. The salad typically made with
Tomatoes, Cucumbers, Red Onions Thinly sliced, Green Bell Peppers Sliced, contributing a mild, sweet flavor. Black Olives
Feta Cheese Chunky pieces of creamy, tangy cheese.
<br/>
<br/>
</p>
           
            <button className='Card-Button'>Order a delivery</button> 
        </div>
        <div className='Card'>
        <img className='Card-Image' src={salanty} alt='Logo'/>
        <br/>
        <br/> 
        <div className='Card-header'>
        <div>Penne Pasta</div>
        <div>$10</div>
        </div> 
        <p className='Card-Description'>Red Sauce Penne Pasta is a classic Italian dish featuring penne pasta coated in a rich, flavorful tomato-based sauce. The sauce is typically made with ripe tomatoes, garlic, onions, olive oil, and a blend of herbs and spices such as basil, oregano, and red pepper flakes. The dish is often garnished with fresh basil leaves and other herbs to enhance its aroma and presentation.</p>
       
        <button className='Card-Button'>Order a delivery</button> 
    </div>
    <div className='Card'>
            <img className='Card-Image' src={BruschettaRezept} alt='Logo' /> 
            <br/>
            <br/>
            <div className='Card-header'>
            <div>Bruschetta Rezept</div>
            <div>$5</div>
            </div> 
            <p className='Card-Description'>Bruschetta is a classic Italian appetizer that is both simple and flavorful. Originating from Italy, this dish typically consists of grilled bread rubbed with garlic and topped with a mixture of fresh tomatoes, basil, olive oil, salt, and pepper. The name “bruschetta” comes from the Italian word “bruscare,” which means “to roast over coals.”<br/><br/></p>
           
            <button className='Card-Button'>Order a delivery</button> 
        </div>
        </main>
     )
}
export default Specials