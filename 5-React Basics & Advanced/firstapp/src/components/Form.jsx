// import "./App.css";
import { useState } from "react";
// import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const Form=()=> {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");
  const [notify,setNotify]=useState('');
  const getIsFormValid = () => {
    // Implement this function
    // if(password.length<8|| firstName.length<3 || lastName.length<3 || validateEmail(email) || role !== "role"){
    
    return(
      firstName && 
      validateEmail(email) && 
      password.length >= 8 && 
      role !== "role" 
    );
      
  };

  const clearForm = () => {
    
    // Implement this function
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword({value:'',isTouched:false})
    setRole('role')
    setTimeout(() => {
      setNotify('')
    }, 1500);
  };
  // setNotify("Account created!");
  const handleSubmit = (e) => {
    e.preventDefault()
    setNotify("Account created!");
    clearForm();
  };

  return (
    <div className="fApp">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="fname">
              First name <sup>*</sup>
            </label>
            <input required minLength={3} maxLength={12} placeholder="First name" name="fname" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
          </div>
          <div className="Field">
            <label htmlFor="lname">Last name</label>
            <input required minLength={3} maxLength={12} placeholder="Last name" name="lname" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
          </div>
          <div className="Field">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input required type="email" placeholder="Email address" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="Field">
            <label htmlFor="password">
              Password <sup>*</sup>
            </label>
            <input required type="password" placeholder="Password" name="password" value={password.value} onChange={(e)=>setPassword(e.target.value)}/>
            {!password && PasswordErrorMessage()}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select required value={role} onChange={(e)=>setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button className="button" type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
          <p className="alert">{notify}</p>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
