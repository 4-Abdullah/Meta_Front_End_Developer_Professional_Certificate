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

function App() {
  return (
    <div className="App">
       "This is the starting code for "My first component" ungraded lab"
      <FirstNav first="Home"/>
      <SecondNav first="Store"/>
      <ThirdNav first="About"/>
      <BrotherList relation="Bro"/>
     
{/*use of forEach to iterate over an array*/}
      <div>
          {[10, 20, 30].forEach(item => console.log(item * 10))}
      </div>
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
