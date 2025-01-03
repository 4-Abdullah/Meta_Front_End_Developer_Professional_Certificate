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
                    <tr key={index}>
                        <td>
                            <label htmlFor={item.id}>{item.id}</label>
                        </td>
                        <td>
                            <input type="text" name={item.id} id={item.id} />
                        </td>
                        <td>
                            {item.createdAt}
                        </td>
                    </tr>
                    )
                })}
            
            </tbody>
         </table>
        </>
    )
}
export default Reverse