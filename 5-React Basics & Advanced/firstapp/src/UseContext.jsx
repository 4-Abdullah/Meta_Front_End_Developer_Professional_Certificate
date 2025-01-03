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


const DessertContext=createContext(null)
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2024-06-11",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2024-06-10",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2024-06-05",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2024-06-11",
  },
];
export const DessertProvider=({children})=>{
    const [AfterMeals]=useState(desserts)
    return(
        <DessertContext.Provider value={{AfterMeals}}>
            {children}
        </DessertContext.Provider>
    )
}

export const UseDessertlistContext=()=>useContext(DessertContext)


const ThemeContext = createContext(null);
export const ThemeProvider = ({ children }) => {
    const [theme,setTheme]=useState('Light')
    
return(
    <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme((prevTheme) => (prevTheme === 'Light' ? 'Dark' : 'Light')) }}>
            {children}
        </ThemeContext.Provider>
)}
export const useTheme = () => useContext(ThemeContext);