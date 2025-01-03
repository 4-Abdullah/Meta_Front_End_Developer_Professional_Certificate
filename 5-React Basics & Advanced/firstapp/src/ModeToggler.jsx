import React, {useState} from "react"
function ModeToggler(){
    const [isDarkMode,setIsDarkMode]=useState(false) 
    let darkMode=<h1 className="Dark">Dark mode is on</h1>
    let LightMode=<h1 className="Light">Light mode is on</h1>
    
    function handleClick(){
       
            if(isDarkMode===true){
                console.log("Dark mode is on")
            }    
                else{
                    console.log("Light mode is on")        
                }
    }
    const handle=()=>{
        setIsDarkMode(!isDarkMode)

    }
    return(
        <div className={isDarkMode?darkMode:LightMode}>
             {isDarkMode ? darkMode : LightMode}
            <button onClick={handleClick} onClickCapture={handle}>
                 {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            
        </div>
    )
}
export default ModeToggler