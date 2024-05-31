import React, {useContext, useState } from 'react'
import { createContext } from 'react'

 const MealsContext=createContext(null)
const Todaymeals=['Baked Beans','Baked Sweet Potatoes','Baked Potatoes']
const MealsProvider=({children})=>{
    const [Meals]=useState(Todaymeals)
    return(
        <MealsContext.Provider value={{Meals}}>
            {children}
        </MealsContext.Provider>
    )
}

export const UseMealslistContext=()=>useContext(MealsContext)
export default MealsProvider