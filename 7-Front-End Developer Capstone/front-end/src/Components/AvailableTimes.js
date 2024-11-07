import { useState,useReducer } from "react";
import { updateTimes } from "./updateTimes";
import { initialState, initializeTimes } from "./initializeTimes";

export const useAvailable=()=>{
    const [count,setCount] = useState(0);
    const [availableTimes,dispatch] = useReducer(updateTimes,initialState,initializeTimes);
    const [dateInput,setdateInput] = useState('');
    const Increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const Inputdate=()=>{
        setInputdate('');
    }
    const setInputdate=()=>{
        setInputdate('');
    }
    const Timeupdate=(date)=>{
        dispatch({type:'UPDATE_TIMES',date});
      }
    
    return {decrement,Increment,count,availableTimes,Inputdate,dateInput,setdateInput,Timeupdate}
    


}