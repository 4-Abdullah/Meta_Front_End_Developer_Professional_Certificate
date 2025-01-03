import { UseMealslistContext } from "./UseContext";

const Counter=(props)=>{
    const {Meals} = UseMealslistContext();
    return(
        <div>
            <h1>Number of meals today: {Meals.length}{props.list.length}</h1>
        </div>
    )
}
export default Counter