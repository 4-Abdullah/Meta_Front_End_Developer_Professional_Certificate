// import React, { useRef, useState } from "react";

// function Soundtrack() {
//   const [isPlaying1,setIsPlaying1]=useState(false)
//   const [isPlaying2,setIsPlaying2]=useState(false)
//   // const bird1Ref = useRef(new Audio(
//   //   "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
//   // ));

//   // const bird2Ref = useRef(new Audio(
//   //   "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
//   // ));
//   const bird1Ref = useRef(null);
//   const bird2Ref = useRef(null);

//   if (!bird1Ref.current) {
//     bird1Ref.current = new Audio(
//       "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
//     );
//   }

//   if (!bird2Ref.current) {
//     bird2Ref.current = new Audio(
//       "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
//     );
//   }

// async  function toggle1() {
//     if (isPlaying1) {
//       bird1Ref.current.pause();
//     } else {
//       try {
//         bird1Ref.current.load();
//         await bird1Ref.current.play();
//       } catch (error) {
//         console.error("Error playing audio:", error);
//     }
//     setIsPlaying1(!isPlaying1);
    
//   };
// }
// async  function toggle2() {
//     if (isPlaying2) {
//       bird2Ref.current.pause();
//     } else {
//       try {
//         bird2Ref.current.load();
//         await bird2Ref.current.play();
//       } catch (error) {
//         console.error("Error playing audio:", error);
//     }
//     setIsPlaying2(!isPlaying2);
//   };
// }

//   return (
//     <div>
//       <button onClick={toggle1}>Caspian Tern 1</button>
//       <button onClick={toggle2}>Caspian Tern 2</button>
//     </div>
//   );
// }

// export default Soundtrack;
import React, { useRef, useState, useEffect } from "react";

function Soundtrack() {
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const bird1Ref = useRef(null);
  const bird2Ref = useRef(null);

  useEffect(() => {
    bird1Ref.current = new Audio(
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
    );
    bird2Ref.current = new Audio(
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
    );

    bird1Ref.current.addEventListener('canplaythrough', () => {
      console.log('Audio 1 can play through');
    });

    bird2Ref.current.addEventListener('canplaythrough', () => {
      console.log('Audio 2 can play through');
    });

    return () => {
      bird1Ref.current.removeEventListener('canplaythrough', () => {});
      bird2Ref.current.removeEventListener('canplaythrough', () => {});
    };
  }, []);

  async function toggle1() {
    if (isPlaying1) {
      bird1Ref.current.pause();
    } else {
      try {
        bird1Ref.current.load(); // Reset the audio element
        await bird1Ref.current.play();
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    }
    setIsPlaying1(!isPlaying1);
  }

  async function toggle2() {
    if (isPlaying2) {
      bird2Ref.current.pause();
    } else {
      try {
        bird2Ref.current.load(); // Reset the audio element
        await bird2Ref.current.play();
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    }
    setIsPlaying2(!isPlaying2);
  }

  return (
    <div>
      <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button>
    </div>
  );
}

export default Soundtrack;
