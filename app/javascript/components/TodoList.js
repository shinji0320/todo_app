import React, { userState, useEffect } from 'react'
import { link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { AiFillEdit } from 'react-icons/ai'

const SearchAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchForm = styled.input`
  font-sie: 20px;
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 10px;
`

const RemoveAllButton = styled.button`
  width: 16%;
  height: 40px;
  background: #f54242;
  border: none;
  font-weight 500px;
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
`

const TodoName = styled.span`
  font-size: 27px;
  ${({ is_completed }) => is_completed && `
    opacity: 0.4;
  `}
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7px auto;
  padding: 10px;
  font-size: 25px;
`

// const CheckBox =styled.div`
//   display: flex;
//   ali
// `

function TodoList() {
  return (
    <div>
      TodoList
    </div>
  )
}

export default TodoList
