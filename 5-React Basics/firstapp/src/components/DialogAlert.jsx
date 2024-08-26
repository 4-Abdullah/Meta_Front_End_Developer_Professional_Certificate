import { useState } from "react"

const  DialogAlert=()=>{
const [hideAlert,sethideAlert]=useState(true)

const Button = ({children,backgroundColor}) => {

    return  <button style={{backgroundColor}} onClick={Abc}>{children}</button>
         
}
const Abc=()=>{
  // console.log('a')
  sethideAlert(!hideAlert)
    // console.log('abc')
}

const Alert = ({children}) => {
    return(
        <>
           <div className={hideAlert?'Overlay':'Overhide'}/>
           <div className={hideAlert?'Alert':'OverAlert'}>{children}</div>
        </>
    )
}

const DeleteButton = () => {
    return <Button backgroundColor={'red'} >Delete</Button>
}



    return(
        <div className="dialog-alert">
        {hideAlert ?(
        <Alert>
            <h4>Delete Account</h4>
            <p>
                Are you sure you want to proceed? You will miss all your delicious recipes!
            </p>
        <DeleteButton/>
        </Alert>):<></>}
    </div>
    )
}
export default DialogAlert