import { UseMealslistContext} from "./UseContext";

const MealsList = () => {

    const {Meals} =UseMealslistContext();

    return(
        <div>
            <h1>Meals List using Context API</h1>
            {Meals.map((meal,index)=>(
                <h2 key={index}>{meal}</h2>
            ))}
        </div>
    )

}
export default MealsList