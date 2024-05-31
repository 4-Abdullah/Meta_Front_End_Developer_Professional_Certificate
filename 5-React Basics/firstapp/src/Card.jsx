import { useLocation } from "react-router-dom";

function Card(props) {
    const location = useLocation();
  const cardProps = location.state;
    return(
        <div className="card">
            <h2>{props.a?props.a:cardProps.a}</h2>
            <h3>{props.b?props.b:cardProps.b}</h3>
        </div>
    )
}

export default Card