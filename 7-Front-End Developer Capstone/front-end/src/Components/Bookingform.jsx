import React, { useState } from 'react'

const Bookingform = (props) => {
    // const [dateInput,setdataInput] = useState('')
    const [guestsnumber,setguestsnumber] = useState('')
    // In Component useState 
    const [selectedTime, setSelectedTime] = useState(''); // initial selected time
    // const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const [Occasion,setOccasion] = useState('')

    return (
        <div className='container'>
        <form className='Bookingform_style'>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={props.dateInput} onChange={(e)=>props.setdateInput(e.target.value)}/>
        <label htmlFor="res-time">Choose time</label>
        
        <select id="res-time" value={selectedTime} onChange={(e)=>setSelectedTime(e.target.value)}>
            {props.availableTimes.map((time, index) => (
                <option key={index} value={time}>{time}</option>
            ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guestsnumber} onChange={(e)=>setguestsnumber(e.target.value)}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={Occasion} onChange={(e)=>setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
        </form>
        </div>
    )
}

export default Bookingform
