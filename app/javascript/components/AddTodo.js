import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify'
import { Fisend } from 'react-icons/fi'

const InputAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top 20px;
`

const Button = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 3px;
  margin-left: 10px;
  padding: 2px 10px;
  background: #1E90FF;
  color: #fff;
  text-align: center;
  cursor: pointer;
  ${({ disabled }) => disabled && `
    opacity: 0.5;
    cursor: default;
  `}
`

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin: 0 7px;
`

function AddTodo() {
  const initialTodoState = {
    id: null,
    name: "",
    is_completed: false
  }

  const [todo, setTodo] = useState(initialTodoState)

  const handleInputChange = event => {
    const { name, value } =event.target;
    setTodo({ ...todo, [name]: value })
  }

  const saveTodo = () => {
    var data = {
      name: todo.name
    }

    axios.post('/api/v1/todos', data)
    .then(resp => {
      setTodo({
        id: resp.data.id,
        name :resp.data.name,
        is_completed: resp.data.is_completed
      })
    })
  }
  return (
    <div>
      AddTodo
    </div>
  )
}

export default AddTodo