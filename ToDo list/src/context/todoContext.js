import {useContext,createContext} from 'react'


export const TodoContext = createContext({

    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false
        }
    ],

    addTodo:()=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:()=>{},
    toggleComplete:()=>{}

})


export const useTodo = ()=>{
    return useContext(TodoContext)
}



export const TodoProvider = TodoContext.Provider