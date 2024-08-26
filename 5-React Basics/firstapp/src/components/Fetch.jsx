import { useState, useEffect } from "react";

export default function Fetch() {
  const [btcData, setBtcData] = useState([]); // Initialize to null for conditional rendering
 const FetchData = async () => {
            const res= await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`); 
            const Json = await res.json(); 
             setBtcData(Json.bpi.USD) 
          } 
    useEffect(()=>{  

      FetchData()

    },[])


  return (
    <>
     <h1>Current BTC/USD data</h1>
      <p>Code: {btcData.code}</p>
      <p>Symbol: {btcData.symbol}</p>
      <p>Rate: {btcData.rate}</p>
      <p>Description: {btcData.description}</p>
      <p>Rate Float: {btcData.rate_float}</p>
    </>
  );
}

export const FetchUser=()=> {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
    .then((data)=>setUser(data))
  };

 useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <h2>Name:{user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt=''/>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}