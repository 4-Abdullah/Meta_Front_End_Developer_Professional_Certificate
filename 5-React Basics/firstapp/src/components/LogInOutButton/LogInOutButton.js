import { useState } from 'react';
import LogInButton from './LogInButton'
import LogOutButton from './LogOutButton'

function LogInOutButton(props){
    const isLoggedIn=props.isLoggedIn;
    const [btn,setbtn]=useState(isLoggedIn)
    const handle=()=>{
        setbtn(!btn)
    }
    if(btn){
    return   <LogOutButton btn={handle}/>
    }else{
        return  <LogInButton btn={handle}/>
    }
    
}
export default LogInOutButton