const Product=(id)=>{
    return(<>
            <h1>Current BTC/USD data</h1> 
            <p>Code: {id.code}</p> 
            <p>Symbol: {id.symbol}</p> 
            <p>Rate: {id.rate}</p> 
            <p>Description: {id.description}</p> 
            <p>Rate Float: {id.rate_float}</p>
        </>
    )
}
export default Product