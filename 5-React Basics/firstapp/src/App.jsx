// import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Main from './Main';
import Footer from './Footer';
import Cover from './Cover';
import Pears from './Pears';
import Apples from './Apples';
import Promo from './Promo';
import { FirstNav,SecondNav,ThirdNav,BrotherList } from './Functions';

const bool=false
const str1="just"
function Example(props){
  return(
    <>
      <h2>The value of the toggle Boolean prop is:{props.toogleBoolean.toString()}</h2>
      <p>The value of the toggle Math prop is:<em>{props.math}</em></p>
      <p>The value of the toggle Str prop is:<em>{props.str}</em></p>
    </>
  )
}

function App() {
  const numbers = [10, 20, 30];
  let logged=true
  return (
    <div className="App">
       "This is the starting code for "My first component" ungraded lab"
      <FirstNav first="Home"/>
      <SecondNav first="Store"/>
      <ThirdNav first="About"/>
      <BrotherList relation="Bro"/>
     <Example toogleBoolean={!bool} math={(10+20)/3} str={str1+" another "+"string"}/>
{/*use of forEach to iterate over an array*/}
      {/* <div> */}
          {

numbers.forEach(number =>{
  if (logged===true) {
    console.log(number * 10); // Log only once
    logged = false;
  }
})}
      {/* </div> */}
      <Heading name="Abdullah" color="Orange"/>
      <Main content="This is what i am talking about all this time."/>
      <Cover>
        <Apples color="Yellow" number="6"/>
        <Pears friend="Peter"/>
      </Cover>
      {/* Another way to call Sub-Components*/}
      <Cover children={<Apples color="yellow" number="5" />}/>
      <Cover children={<Pears friend="Peter" />}/>
      <Promo heading="Little Lemon" promoheading="Eat what you can"/>
      <Footer copyright="@Copyright Little Lemon"/>
    </div>
  );
}

export default App;
