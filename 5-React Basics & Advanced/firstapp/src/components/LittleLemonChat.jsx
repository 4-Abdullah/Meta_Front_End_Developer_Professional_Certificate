// import { useState,useEffect } from "react";
// export function  LittleLemonChat(props) { 
//     const [status, setStatus] = useState('offline'); 
  
//     useEffect(() => { 
//       LemonChat.subscribeToMessages(props.chatId, () => setStatus('online')) 
  
//       return () => { 
//         setStatus('offline'); 
//         LemonChat.unsubscribeFromMessages(props.chatId); 
//       }; 
//     }, []); 
  
//     // ... 
//   } 