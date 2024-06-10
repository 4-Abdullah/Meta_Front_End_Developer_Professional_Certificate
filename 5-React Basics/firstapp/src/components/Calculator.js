import {useState,useRef} from "react"; 
  
  function Calculator() { 
    const inputRef = useRef(null); 
    const resultRef = useRef(null); 
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      const inputValue = inputRef.current.value;
  
      if (inputValue === '' || isNaN(inputValue)) {
        setError('This field cannot be empty');
        return false; // Return false to indicate validation failure
    }

    setError(''); // Clear any previous error messages
    return true; // Return true to indicate validation success
  }

    
    function plus(e) { 
      e.preventDefault();
      const inputValue = inputRef.current.value;
  
      // Call handleSubmit for validation
        if(!handleSubmit(e)){
          return           // Exit if validation fails
        }
      if(result===null){
        setResult(Number(inputValue))
        setError('')
      } 
      else{setResult((result) => result + Number(inputValue));
        setError('')
      }
    resetInput(e)
  }; 
   
    function minus(e) { 
      e.preventDefault();
      const inputValue = inputRef.current.value;

      // Call handleSubmit for validation
        if(!handleSubmit(e)){
          return           // Exit if validation fails
        }
      if(result===null){
        setResult(inputValue)
        setError('')

      }
      else{setResult((result) => result - Number(inputValue))
        setError('')
      }
    resetInput(e)
  };
  
    function times(e) { 
      e.preventDefault();
      const inputValue = inputRef.current.value;

     // Call handleSubmit for validation
        if(!handleSubmit(e)){
          return           // Exit if validation fails
        }
      if(result===null){
        setResult(inputValue)
        setError('')
      }
    else{  
      setResult((result)=> result * Number(inputValue))
      setError('')
    }
  resetInput(e);
  }; 
   
    function divide(e) { 
        e.preventDefault();
      const inputValue = inputRef.current.value;
        
        // Call handleSubmit for validation
        if(!handleSubmit(e)){
          return           // Exit if validation fails
        }
       
  if (result === null) {
      setResult(Number(inputValue));
      setError('')
  } else {
      setResult((result) => result / Number(inputValue));
      setError('')
    }
  
  resetInput(e);
}
    function resetInput(e) { 
        e.preventDefault(); 
        inputRef.current.value=null
    }; 
   
    function resetResult(e) {
        e.preventDefault() 
          setResult(null)
    }; 


    
    return ( 
      <div className="Calculator">  
        <div> 
          <h1>Simplest Working Calculator</h1> 
        </div> 
        <form> 
          <p ref={resultRef}> 
            {result} 
          </p> 
          <input className="input"
            pattern="[0-9]*" 
            ref={inputRef}
            type="number" 
            placeholder="Type a number" onChange={handleSubmit}
          />{error && <p style={{ color: 'red' }}>{error}</p>} 
          <br />
          <br /> 
          <button onClick={plus}>addition</button> 
          <button onClick={minus}>subract</button> 
          <button onClick={times}>multiply</button>
          <button onClick={divide} type="submit">divide</button>
          
          <button onClick={resetInput} type="reset">resetInput</button> 
          <button onClick={resetResult} type="reset">resetResult</button> 
        </form> 
      </div> 
    ); 
  } 
   
  export default Calculator; 
  