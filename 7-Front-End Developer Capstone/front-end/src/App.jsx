import React, { useEffect } from 'react'
import CallToAction from './Components/CallToAction';
import Specials from './Components/Specials';
import CustomersSay from './Components/CustomerSay';
import Lahore from './Components/Lahore';
import Footer from './Components/Footer';
import './App.css'
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
// import {initializeTimes, initialState,dateInput,setdateInput} from './Components/initializeTimes';
import { updateTimes } from './Components/updateTimes';
import { useAvailable } from './Components/AvailableTimes';
import { State } from './Components/State';
import Bookingform from './Components/Bookingform';
export default function App() {
  // const [selectedTime, setSelectedTime] = useState(''); // initial selected time
  // const [dateInput,setdateInput] = useState('')
// const {Increment,decrement,count,}=Available()
    // const  = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
 
   

//  const =()=>{
//     return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
// }

// const Timeupdate=(date)=>{
//   dispatch({type:'UPDATE_TIMES',date})
// }
const {availableTimes,dateInput,setdateInput,Timeupdate} = useAvailable();
useEffect(()=>{
  Timeupdate(dateInput)
},[dateInput])




//  useEffect(()=>{
//    const updateTimes=()=>{
//     if(dateInput==='2024-10-22'){
//      setavailableTimes(['17:00', '18:00', '19:00']);
//      console.log(availableTimes)
//     }
//     else{
//       setavailableTimes(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
//     }
//   }
// console.log(updateTimes())
// const initializeTimes=()=>{
//       setSelectedTime(availableTimes[0]);
//       console.log(selectedTime)
//   }
// console.log(initializeTimes())
//   },[dateInput])
  

    return (
    <>
        <Nav/>
        <CallToAction/>
        {/* <Hompage/> */}
        <Specials/>
        <CustomersSay/>
        {/* <br/> */}
        <Lahore/>
        <Footer/>
        <Routes>
          <Route path='/' element={<></>} />
        </Routes>
        <State/>
        <Bookingform setdateInput={setdateInput} dateInput={dateInput} availableTimes={availableTimes}
             />
    </>
  )
}
