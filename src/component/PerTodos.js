import React, { useContext } from 'react'
import { todosContext } from '../context/todosContext';

export const PerTodos = ({todo, index}) => {
    const {title, userId} = todo;

    const {deleteClicked} = useContext(todosContext);


    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Title : {title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">User Id : {userId}</h6>
                <p className="card-text">No Description</p>
                <button className="btn btn-danger" id={index} onClick={deleteClicked}>Delete</button>
            </div>
        </div>
    )
}
