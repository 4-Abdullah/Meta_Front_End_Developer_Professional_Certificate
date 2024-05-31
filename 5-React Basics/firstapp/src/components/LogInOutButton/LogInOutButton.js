import LogInButton from './LogInButton'
import LogOutButton from './LogOutButton'

function LogInOutButton(props){
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn){
    return    <LogOutButton/>
    }else{
       return <LogInButton/>
    }
    
}
export default LogInOutButton