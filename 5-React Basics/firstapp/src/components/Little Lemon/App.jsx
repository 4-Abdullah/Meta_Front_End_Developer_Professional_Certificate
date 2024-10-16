import React from 'react'
import { Link } from "react-router-dom";
import Logo from './Asset 14@4x.png'
import './App.css'
export default function App() {
  return (
    <>
        <Nav/>
        <CallToAction/>
        {/* <Hompage/> */}
        <Specials/>
        {/* <CustomersSay/>
        <Chicago/>
        <BookingPage/> */}
    </>
  )
}

const Nav=()=>{
    const cardData={ a:"First card's h2", b:"First card's h3"}
     
    return(
        <nav>
            <ul>
            <li><Link to="/"><img src={Logo} alt='Logo' width={150} height={50}></img></Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Form">About</Link></li>
            <li><Link to="/Card" state={cardData}>Menu</Link></li>
            <li><Link to="/FeaturedFoodList" >Reservations</Link></li>
            <li><Link to="/Goals">Order online</Link></li>
            <li><Link to="/About">Login</Link></li>
            </ul>
        </nav>
     )
} 

const CallToAction=()=>{

    return(
        <>
<img className='hero-image' src={Logo} alt='Logo' width={250} height={180}/> 

        <div className='hero-content'>
            <h1 className='hero-heading'>Little Lemon Lahore</h1>
            
            <h5>We are a family owned Mediterranean 
restaurant, focuses on traditional recipes
served with a modern twist.</h5>      
</div>

        <button className='hero-button'>Reserve A Table</button>
        </>
    )
}

const Specials=()=>{
    
    return(
        <main className='Specials'>
        <button className='Specials-button'>Online Menu</button>
        <h2>Specials</h2>
        <Card/>

        </main>
    )
}
function Card (){
     
    return(
        <main className='Card'>
            <img className='Card-Image' src={Logo} alt='Logo'/> 
            <div className='Card-header'>
            <h5 className='Card-title'>Title</h5>
            <h5>Price</h5>
            </div> 
            <h5 className='Card-Description'>Description</h5>
           
            <button className='Card-Button'>Order a delivery</button> 
        </main>
     )
}