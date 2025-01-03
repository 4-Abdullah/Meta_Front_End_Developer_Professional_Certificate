import {UseDessertlistContext} from "../UseContext";

function FeaturedDessertList() {
    // Implement the component here.
    const {AfterMeals} =UseDessertlistContext();
    // To filter less than or equal to 500 calories dessert list  
    const filterlist = AfterMeals.filter(meal=>meal.calories<=500)
    // To sort dessert list according to calories 
    const sortlist= filterlist.sort((a,b)=>a.calories-b.calories)
    const Dessertlist = sortlist.map((item,index) => {
      const list = `${item.name} - ${item.calories} cal ${item.createdAt}`
      return <li key={index}>{ list }</li>
    })
    return (
      <>
        <ul>
          {Dessertlist}
        </ul>
      </>
    )
  }
  
  export default FeaturedDessertList;