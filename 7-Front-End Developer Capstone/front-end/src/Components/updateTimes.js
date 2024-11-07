
// import { initialState } from "./initializeTimes";

export const updateTimes = (state, action) => {
     // const updateTimes = (state, action) => {
    //   if (action.type === 'UPDATE_TIMES') {
    //       if (action.date === '2024-10-22') {
    //           return ['17:00', '18:00', '19:00'];
    //       } else {
    //           return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    //       }
    //   }
    //   return state;
    // };
    if (action.type === 'UPDATE_TIMES') {
        if (action.date === '2024-10-22') {
                      return ['17:00', '18:00', '19:00'];
                  } else {
                      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
                  }
              }
    return state;
    
    
}



