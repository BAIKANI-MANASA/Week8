import {create} from 'zustand'

//create strore
export const useTest=create((set)=>({
    //state
    x:10,
    y:20,
    //function to modify state
    incrementX:()=>set((state)=>({x:state.x+1})),
    decrementX:()=>set((state)=>({x:state.x-1})),
    incrementY:()=>set((state)=>({y:state.y+1})),
    incrementXbyValue:(v)=>set(state=>({x:state.x+v})),
    updateUser:()=>set(state=>({user:{...state.user,age:30}}))
}))