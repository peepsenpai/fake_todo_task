import { createContext, useState } from "react";

// creating context 
export const todosContext = createContext({});


// this childen here represents the all components 
export const DataProvider = ({children}) =>{
    const [todoList, setTodoList] = useState([]);

    const deleteClicked = (e)=>{
        // it doesn't deleting the actual data from server ,that's why i'm doing it. otherwise i would do a async api call to delete that perticular todo.
       let deleteIndex = parseInt(e.target.id);
       let tempArr = [...todoList];
       tempArr.splice(deleteIndex, 1);
       setTodoList(tempArr)
    };

    return (
        <todosContext.Provider value={
            {
                todoList, setTodoList, deleteClicked
            }
        }
        >
            {children}
        </todosContext.Provider>
    )
}