// import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Main from './Main';
import Footer from './Footer';
// function Heading(){
//   return(
//     <h1>Heading of the first component </h1>
//   )
// }
function App() {
  return (
    <div className="App">
       This is the starting code for "My first component" ungraded lab 
      <Heading name="Abdullah" color="Orange"/>
      <Main content="This is what i am talking about all this time."/>
      <Footer copyright="@Copyright Little Lemon"/>
    </div>
  );
}

export default App;
