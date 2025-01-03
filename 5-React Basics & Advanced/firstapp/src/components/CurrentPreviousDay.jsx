import { useState, useRef } from "react";
export default function CurrentPreviousDay() {
  const time=new Date()
  const currentday=time.toLocaleString("en-PK",{weekday:"long"})
  const [day, setDay] = useState(currentday);
  
// Calculate the day before
const yesterday = new Date(time);
yesterday.setDate(yesterday.getDate() - 1);
const dayBefore = yesterday.toLocaleString("en-PK", { weekday: "long" });
 const ref = useRef(dayBefore);

  const getNextDay = () => {
    ref.current=day

    if (day === "Monday") {
      setDay("Tuesday")
    
    } else if (day === "Tuesday") {
      setDay("Wednesday")
     
    } else if (day === "Wednesday") {
      setDay("Thursday")
     
    } else if (day === "Thursday") {
      setDay("Friday")
      
    } else if (day === "Friday") {
      setDay("Saturday")
    
    }else if (day === "Saturday") {
      setDay("Sunday")
    
    }else if (day === "Sunday") {
      setDay("Monday")
      
    }
  
  }

  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {ref.current && day !== ref.current &&
           (
            <span>Previous day was: {ref.current}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}

