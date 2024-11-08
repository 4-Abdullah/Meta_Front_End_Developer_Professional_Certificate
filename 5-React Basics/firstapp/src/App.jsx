// import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react"
import Time from './Time';
// import {Routes,Route} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './components/About.js'
import Nav from './components/Nav.jsx';
import Form from './components/Form.jsx';
import Develop from './Develop';
import Card from './Card';
import Apples from './Apples';
import LogInOutButton from './components/LogInOutButton/LogInOutButton.js';
import RoutineTask from './components/RoutineTask.js';
import MultiMedia from './components/Media/MultiMedia'
import Soundtrack from './components/Soundtrack'
import Calculator from './components/Calculator.js';
import { DessertProvider, ThemeProvider, useTheme } from './UseContext.jsx';
import FeaturedDessertList from './components/FeaturedDesertList.jsx'
import Reverse from './components/Reverse.jsx';
import Toggle from './components/Switch/Toggle.jsx';
import Goals from './components/Goals.jsx';
import UseMemo from './components/UseMemo.jsx';
import Fetch from './components/Fetch.jsx';
import Notfound from './components/Notfound.jsx'
import LittleLemon from './components/Little Lemon/App.jsx'
const App=()=>{

  const [currentTime, setCurrentTime] = useState(new Date());
// Remember
// Use an empty array if you want the effect to run only once (on mount).
// Omit the array if you want the effect to run on every render.
// Specify dependencies in the array if you want the effect to run based on specific changes.
  // const intervalId = setInterval(() => {   
  //     // Update time every second
  //     setCurrentTime(new Date());
  //   }, 1000);
  //   useEffect(() => {
  // // Cleanup function to avoid memory leaks when the component unmounts
  //   return ()=>clearInterval(intervalId)
  // }); 
  useEffect(() => {
  
            return ()=>
                  document.title="Little Lemon"
          },[]); 
  

  return(
      <div>
          
      <ThemeProvider>
        {/* <Time localTime={currentTime.toLocaleTimeString([],{hour12:true})}/> */}
       <App01/>
        </ThemeProvider> 
        </div>
  )
}

export default App;


const App01 = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [changeMode, setChangeMode] = useState(true);
  //   // const date=new Date()
    const [currentTime, setCurrentTime] = useState(new Date());

    const intervalId = setInterval(() => {   
      // Update time every second
      setCurrentTime(new Date());
    }, 1000);
    useEffect(() => {
  // Cleanup function to avoid memory leaks when the component unmounts
    return ()=>clearInterval(intervalId)
  }); 
  const handle = () => {
    setIsDarkMode(!isDarkMode);
  }

  const themeHandle = () => {
    setChangeMode(!changeMode);
  }

  
  return (
    // <>
    <div className={changeMode?(isDarkMode?"Dark":"Light"):(theme==='Dark'?'Dark':'Light')}>
      
      <Toggle toggle={themeHandle}/>
      <Nav/>
           <button onClick={handle} onClickCapture={toggleTheme}>
           {changeMode?(isDarkMode?'Switch to Light Mode':'Switch to Dark Mode'):(theme==='Light'?'Switch to Dark Mode':'Switch to Light Mode')}   
          </button>  
        <LogInOutButton isLoggedIn={false}/>
        <h1>Little Lemon 🍕</h1>
        <UseMemo a={'Eat'} b={'Food'}/>
        <Fetch/>
        <RoutineTask/>
        <MultiMedia/>
        <hr/>
        <Soundtrack/>
        <Calculator/>
        <Reverse/>
        <LittleLemon/>
           <Time localTime={currentTime.toLocaleTimeString([],{hour12:true})}/>
       <Routes>
             <Route path="/" element={<></>}/>       
            <Route path="/About" element={<About/>}/>
             <Route path="/Form" element={<Form/>}/>
             <Route path="/Develop" element={<Develop/>}/>
             <Route path="/Card" element={<Card/>}/>
             <Route path="/FeaturedFoodList" element={<DessertProvider>
                                                            <FeaturedDessertList/>
                                                       </DessertProvider>}/>
             <Route path="/Goals" element={<Goals/>}/>
             <Route path="*" element={<Notfound/>}/>
       </Routes>
        
        </div>
        // {/* </> */}
  );
}
// export default App01;