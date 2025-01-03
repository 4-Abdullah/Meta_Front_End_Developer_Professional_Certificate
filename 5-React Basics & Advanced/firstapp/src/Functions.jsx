export function FirstNav (props){
    return(
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
export const SecondNav=function(props){
    return(
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
// if one parameter then parentheses is optional other than that its compulsory
export const ThirdNav=props=>{
    return(
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
export function BrotherList(props){
    return(<div>
            <div>
                {["Ali","Burhan","Muzamil","Yousaf"].map(item=>item+"-"+props.relation).join(', ')}
            </div>
            <div>
            {/* {["Ali","Burhan","Muzamil","Yousaf"].map(item=><div key="item">{item+"-"+props.relation}</div>).join(', ')} */}
        </div>
        </div>
    )
}
// comparison-operator ? true:false
export function ternaryoperator(){
    return(
        <div>
            {<h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>}
        </div>
    )
}
export function functiondeclaration(){
    return(
        <div>
            {<h1>Here's a random number from 0 to 10:{(Math.floor(Math.random()*10)+1)}</h1>}
        </div>
    )
}
export function functionexpression(){
    const getRandomNum=()=>(Math.floor(Math.random()*10)+1)
    return(
        <div>
            {<h1>Here's a random number from 0 to 10:{getRandomNum()}</h1>}
        </div>
    )
}