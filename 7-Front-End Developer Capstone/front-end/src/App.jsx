import React, { useEffect } from 'react'
import Home from './Components/Home';
import Footer from './Components/Footer';
import './App.css'
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import { useAvailable } from './Components/AvailableTimes';
import Bookingform from './Components/Bookingform';

export default function App() {

const {availableTimes,dateInput,setdateInput,Timeupdate} = useAvailable();
useEffect(()=>{
  Timeupdate(dateInput)
},[dateInput])

    return (
      <div className="App">
        <Nav/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Bookingform' element={<>  <br/>
            <Bookingform setdateInput={setdateInput}
               dateInput={dateInput} availableTimes={availableTimes}/></> } />
        </Routes>
        <Footer/>
    </div>
  )
}
