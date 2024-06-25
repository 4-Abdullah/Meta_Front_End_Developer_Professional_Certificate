import { useState } from "react"

const Reverse=()=>{
    const [todos,setTodos]=useState([
    {
        id:'todo1',
        createdAt:'18:00'
    },
    {
         id:'todo2',
        createdAt:'20:30'
    }])
    const reverseOrder=()=>{
        setTodos([...todos].reverse())
    }
    return(
        <>
        <button onClick={reverseOrder}>reverseOrder</button>
         <table>
            <tbody>
                {todos.map((item,index)=>{
                return(
                    <div key={index}>
                        <label htmlFor={item.id}>{item.id}</label>
                        <input type="text" name={item.id}/>{item.createdAt}
                    </div>
                    )
                })}
            
            </tbody>
         </table>
        </>
    )
}
export default Reverse