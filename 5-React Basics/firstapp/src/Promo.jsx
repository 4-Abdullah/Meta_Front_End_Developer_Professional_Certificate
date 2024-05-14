function Promo(props){
        const style={
            color: "red",
            fontSize:"20px"
        }
        const sub_style={
                color:"tomato"
        }
        return(
            <div className="promo-section">
                <div style={style}>
                    <h1>{props.heading}</h1>
                </div>
                <div style={sub_style}>
                <h2>{props.promoheading}</h2>
                </div>
            </div>
        )
}
export default Promo;