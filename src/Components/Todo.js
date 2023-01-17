import React from 'react'
import EditTask from './EditTask' 
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  Delete, Check } from '../Actions/ActionAdd'

const Todo = ({el}) => {
    const dispatch = useDispatch()


  return (
    <div >

      {el.isDone?
      <h1 style={{ fontFamily: 'cursive', color: 'lightsalmon' , textDecoration: "line-through"}}>{el.texte}</h1>:
    
      <h1 style={{ fontFamily: 'cursive', color: 'lightsalmon' }}>{el.texte}</h1>}
<EditTask el={el}/>
<Button style={{ backgroundColor: 'aquamarine'}} variant="info" onClick={() => dispatch(Delete(el.id))}>Delete </Button>{' '}
<Form.Check aria-label="option 1" onClick={() => { dispatch(Check(el.id)) }} />



</div>
  )
}

export default Todo