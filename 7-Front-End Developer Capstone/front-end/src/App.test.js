import React from 'react';
import { render, screen } from '@testing-library/react';
import Bookingform from './Components/Bookingform';
import {initializeTimes,initialState} from './Components/initializeTimes';
import { updateTimes } from './Components/updateTimes';
import App from './App';
import { State } from './Components/State';
import { useAvailable } from './Components/AvailableTimes';
import { act , renderHook } from '@testing-library/react';

test('Booking text check',()=>{
  const {availableTimes,dateInput,setdateInput} = useAvailable();
  useEffect(()=>{
      Timeupdate(dateInput)
    },[dateInput])
    render(<Bookingform setdateInput={setdateInput} dateInput={dateInput} availableTimes={availableTimes}
      />);
      const countTest = screen.getByText(/Choose date/i);
  expect(countTest).toBeInTheDocument();
})


// test('should handle increment and decrement', () => { const { result } = renderHook(() => useAvailable()); // Increment 
// act(() => { result.current.Increment(); }); expect(result.current.count).toBe(1); // Decrement
// act(() => { result.current.decrement(); }); expect(result.current.count).toBe(0);
// });

// test('Count state test',()=>{
//   render(<State/>);
//   const countTest = screen.getByText(/0/i);
//   expect(countTest).toBeInTheDocument() 
// })
// test('initializeTimes returns the correct expected value', () => {
//   const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
//   expect(initializeTimes()).toEqual(expectedTimes);
// });

// test('updateTimes returns the same value provided in the state', () => {
//     const newState = ['17:00', '18:00', '19:00'];
//     const action = { type: 'UPDATE_TIMES', date: '2024-10-22'};
//     const updatedState = updateTimes(initialState, action);
//     expect(updatedState).toEqual(newState);
// });
