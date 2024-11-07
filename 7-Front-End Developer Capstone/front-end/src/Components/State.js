import { useAvailable} from "./AvailableTimes"
export const State=()=>{
    const {Increment, decrement,count} = useAvailable()

    return(
        <><p>{count}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={decrement}>decrement</button>   
        </>
    )

}