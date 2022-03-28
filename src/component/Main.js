import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { BASE_URL } from '../config/api';
import { todosContext } from '../context/todosContext';
import { PerTodos } from './PerTodos';

export const Main = () => {

  // grabing the global context here 
  const {todoList, setTodoList} = useContext(todosContext);

  useEffect(()=>{
      const fetchTodo = async()=>{
        const data = await axios.get(`${BASE_URL}/todos`);
        if(data.status === 200){
          setTodoList(data.data);
        }
      }
      fetchTodo();
  }, []);

  return (
    <div className="container my-5">
      <h3 className="text-muted mb-3 text-center">Todos</h3>
        {
          todoList.length !== 0 && <div className="row">
            {
              todoList.map((todo, index) => {
                return <div className="col-lg-4 col-md-6 col-sm-12 mb-3" key={todo.id}>
                  <PerTodos todo={todo} index={index}/>
                </div>
              })
            }
          </div>
        }
    </div>
  )
}
