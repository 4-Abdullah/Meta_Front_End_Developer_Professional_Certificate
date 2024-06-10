import React, { useRef, useState } from "react";

function Soundtrack() {
  const [isPlaying1,setIsPlaying1]=useState(false)
  const [isPlaying2,setIsPlaying2]=useState(false)
  const bird1Ref = useRef(new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  ));

  const bird2Ref = useRef(new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  ));

  function toggle1() {
    if (isPlaying1) {
      bird1Ref.current.pause();
    } else {
      bird1Ref.current.play();
    }
    setIsPlaying1(!isPlaying1);
  };

  function toggle2() {
    if (isPlaying2) {
      bird2Ref.current.pause();
    } else {
      bird2Ref.current.play();
    }
    setIsPlaying2(!isPlaying2);
  };


  return (
    <div>
      <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button>
    </div>
  );
}

export default Soundtrack;
