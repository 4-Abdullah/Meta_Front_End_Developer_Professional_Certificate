// import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react"
import Time from './Time';
import {Routes,Route} from 'react-router-dom'
import About from './components/About.js'
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.js'
import Develop from './Develop'
import Card from './Card';
import Apples from './Apples';
function App(){
  const [isDarkMode,setIsDarkMode]=useState(false) 
  // const date=new Date()
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update time every second

    // Cleanup function to avoid memory leaks when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array: Effect runs only once on mount


  function handleClick(){
     
          if(isDarkMode===true){
              console.log("Dark mode is on")
          }    
              else{
                  console.log("Light mode is on")        
              }
  }
  const handle=()=>{
      setIsDarkMode(!isDarkMode)

  }
  return(
      <div className={isDarkMode?"Dark":"Light"}>
        <Nav/>
           <button onClick={handleClick} onClickCapture={handle}>
               {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
          {<Time localTime={currentTime.toLocaleTimeString([],{hour12:true})}/>}
      <Routes>   
            <Route path='./' element={<App/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Footer" element={<Footer/>}/>
            <Route path="/Develop" element={<Develop/>}/>
            <Route path="/Card" element={<Card/>}/>
            <Route path="/Apples" element={<Apples/>}/>
      </Routes>
      </div>
  )
}

export default App;
