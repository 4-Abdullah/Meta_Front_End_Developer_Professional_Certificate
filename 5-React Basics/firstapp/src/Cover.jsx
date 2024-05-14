// import React from 'react';
function Cover(props) {
    let bagstyle={
        padding:"20px",
        margin:"20px 0",
        border:"1px solid gray",
        background:"#fff"
    }
    return (
        <div style={bagstyle}>{props.children}</div>
    )
}

export default Cover;