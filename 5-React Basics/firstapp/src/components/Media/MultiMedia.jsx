import React, { useState } from "react";
import {Image} from "./Image";
import ReactPlay from "./ReactPlayer";
function MultiMedia(){
    const [showImage, setShowImage] = useState(true);
    const [showPlayer, setShowPlayer] = useState(true);
    
    return (
      <div>
        <button onClick={()=>setShowImage(!showImage)} >{showImage?'Show Image':'Hide Image'}</button>
        {showImage === false && <Image />}
        <button className='ReactPlayer-btn' onClick={()=>setShowPlayer(!showPlayer)}>{showPlayer?'Show ReactPlayer':'Hide ReactPlayer'}</button>
        {showPlayer === false && <ReactPlay />}
      </div>
    );
  
}
export default MultiMedia