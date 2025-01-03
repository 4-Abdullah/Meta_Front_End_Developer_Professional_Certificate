import Workdays from './Workdays'
import Weekends from './Weekends'
import { useState } from 'react'
function ConditionalRendering(){
    const day=new Date().getDay()
    if(day>=1&&day<=5){
        return <Workdays/>
    }    
    return(
            <Weekends/>
        )
}
export default ConditionalRendering

// props is a special object that React automatically passes to every functional component.
// day is extracted from the props object, which holds all the properties passed to the component.
export function ConditionalRenderingProps({day}){
        const weekday=(day>=1&&day<=5) 
        const weekend=(day>=6&&day<=7)
        let message
    if(weekday){
        message=<Workdays/>
    }
    else if(weekend){
        message=<Weekends/>
    }    
    return(
        <div>
            {message}
        </div>
        )
}

export function LogicalExample(){
    const [val, setVal] = useState(''); // Initialize val state

    const handleChange = (event) => {
      setVal(event.target.value);
    };
    return(
        <div>
            <h2>Please don't type in a zero</h2>
            <input type="text" value={val} onChange={handleChange} />
        {val !=='0' &&<p>hey no 0 was typed in</p>}
        </div>
    )
}