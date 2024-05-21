function Btn(){
    const clickHandler=()=>console.log("clicked")
 return(
    <button onClick={clickHandler} onMouseOver={clickHandler} className="btn">Click Me</button>
 )   
}

export default Btn

export function FirstBtn(){
   return(
      <button onClick={
   function(){console.log("clicked")}
      }>An inline anonymous ES5 function event handler</button>
   )
}

export function SecondBtn(){
   return(
      <button onClick={
   ()=>{console.log("clicked")}
      }>An inline anonymous ES6 function event handler</button>
   )
}

export function ThirdBtn(){
   function clickHandler(){
      console.log("clicked")
   }
return(
   <button onClick={clickHandler}>using a separate function declaration</button>
)   
}

export function FourthBtn(){
   const clickHandler=()=>console.log("clicked")
return(
   <button onClick={clickHandler}>using a separate function expression</button>
)   
}

export function RandomNumber() {
   function handleClick(){
     let randomNum = Math.floor(Math.random()*3)+1
     console.log(randomNum)
     let userInput=prompt('type a number')
     alert(`Computer number:${randomNum}, Your guess: ${userInput}`)
   }
   return (
     <div>
       <h1>Task: Add a button and handle a click event</h1>
       <button onClick={handleClick}>Guess the number between 1 and 3</button>
     </div>
   );
 } 