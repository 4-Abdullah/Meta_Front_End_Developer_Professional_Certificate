import Counter from './Counter';
import MealsList from './MealsList';
import MealsProvider from './UseContext'
import { FirstNav,SecondNav,ThirdNav,BrotherList } from './Functions';
import ModeToggler from './ModeToggler'
import Btn,{FirstBtn,SecondBtn,ThirdBtn,FourthBtn,RandomNumber} from './Btn';
import Card from './Card';
import {Form, InputUseState, TextInputWithFocusButton} from './Hooks';
import Heading from './Heading';
import Main from './Main';
import Footer from './Footer';
import Cover from './Cover';
import Pears from './Pears';
import Promo from './Promo';
import Apples from './Apples';
import { useState,useReducer } from 'react';
import { ConditionalRenderingProps, LogicalExample } from './components/Conditional Rendering/ConditionalRendering';
/* eslint-disable */ 
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

const reducer=(state,action)=>{
  if(action.type==='ride') return {money:state.money+10};
  else if(action.type==='fuel') return {money:state.money-50};
  return new Error();
}

function Develop() {
  const today=new Date().getDay()
  const initialState = {money:100}
  const [state,dispatch] = useReducer(reducer,initialState);
  const [fruits] = useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
]);
  return (
    <div className="App">
      <FirstNav first="Home"/>
      <SecondNav first="Store"/>
      <ThirdNav first="About"/>
      <BrotherList relation="Bro"/>
     <Example toogleBoolean={!bool} math={(10+20)/3} str={str1+" another "+"string"}/>
      <Heading name="Abdullah" color="Orange" className="card"/>
      <Main content="This is what i am talking about all this time."/>
      <Btn/>
      <FirstBtn/>
      <SecondBtn/>
      <ThirdBtn/>
      <FourthBtn/>
      <RandomNumber/>
      <ModeToggler/>
      <InputUseState/>
      <Form/>
      <TextInputWithFocusButton/>
      <ConditionalRenderingProps day={today}/>
      <LogicalExample/>
      <MealsProvider>
      <MealsList/>
      <Counter list={fruits}/>
     </MealsProvider>
      <h1>Wallet:{state.money}</h1>
      <div>
        <button onClick={()=>dispatch({type:'ride'})}>A new Customer!</button>
        <button onClick={()=>dispatch({type:'fuel'})}>Refill the tank!</button>
      </div>
      <Cover>
        <Apples color="Yellow" number="6"/>
        <Pears friend="Peter"/>
      </Cover>
      {/* Another way to call Sub-Components*/}
      <Cover children={<Apples color="yellow" number="5" />}/>
      <Cover children={<Pears friend="Peter" />}/>
      
      <h1>Task: Add three Card elements</h1>
      <Card a="First card's h2" b="First card's h3"/>
        <Card a="Second card's h2" b="Second card's h3"/>
        <Card a="Third card's h2" b="Third card's h3"/>
        <Btn/>
      <Promo heading="Little Lemon" promoheading="Eat what you can"/>
      <Footer copyright="@Copyright Little Lemon"/>
    </div>
  );
}

export default Develop