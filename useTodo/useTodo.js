import React from 'react'
import { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

const initialState = []

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

   

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

    const handleNewTodo = (newTodo) => {
        dispatch({
            type: '[TODO] add todo',
            payload: newTodo
        })
    }

    const handleDelete = (todoId) => {
        console.log(todoId);
        dispatch({
            type: '[TODO] delete todo',
            payload: todoId
        })
    }

    const handleToggle = (todoId) => {
        console.log(todoId);
        dispatch({
            type: '[TODO] toggle todo',
            payload: todoId
        })
    }

  return {
        todos,
        handleNewTodo,
        handleDelete,
        handleToggle
  }
}
