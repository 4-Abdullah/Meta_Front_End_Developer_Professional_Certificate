import React, { useRef, useState } from "react"

export function InputUseState(){

        const [inputText,setinputText]=useState('Hello')
        function handlechange(e){
            setinputText(e.target.value)
        }
    return(
        <div>
            <input type="text" value={inputText} onChange={handlechange}/>
            <p>You typed:{inputText}</p>
            <button onClick={()=>setinputText('Hello Xavier!')} className="btn">Reset</button>
        </div>
    )
}
export function Form(){

    const [form,setform]=useState({
        firstName:'Luke',
        lastName:'Jones',
        email:'Xavier@vu.edu.pk'
    })

    function handleform(e){
            setform(e.target.value)
    } 

    return(
        <div>
            {/* In JSX, you need to use htmlFor to achieve the same association
                because for is a reserved keyword in JavaScript 
                and htmlFor aligns with the DOM API property name. */}
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname"  value={form.firstName} onChange={handleform}/>
            
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname"  value={form.lastName} onChange={handleform}/>
            
            <label htmlFor="email">email</label>
            <input type="text" name="email"  value={form.email} onChange={handleform}/>

        </div>
    )  
}

export function TextInputWithFocusButton(){
    const inputRef=useRef(null)
    const [inputtext,setinputText]=useState('')
   const onButtonClick=()=>{
    if(inputRef.current){
            inputRef.current.focus()
        }
    }

    return(
        <>
            <input value={inputtext} ref={inputRef} onChange={e=>{setinputText(e.target.value)}} type="text"/>
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    )
} 
