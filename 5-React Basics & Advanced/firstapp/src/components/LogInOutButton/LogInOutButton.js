import { useState } from 'react';

function LogInOutButton(props){
    const isLoggedIn=props.isLoggedIn;
    const [btn,setbtn]=useState(isLoggedIn)
    const handle=()=>{

        setbtn(!btn)
    }
   return  <button className='login-btn' onClick={handle}>{btn ? 'Logout' :'LogIn'}</button>

    
}
export default LogInOutButton