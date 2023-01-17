import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {  useDispatch } from 'react-redux';
import { useState } from 'react';
import { Add} from '../Actions/ActionAdd'
import { v4 as uuidv4 } from 'uuid';



const AddTask = () => {
  
  const [add, setAdd] = useState({
    id: "",
    texte: "",
    isDone: ""
  })


  const dispatch = useDispatch()
  const handleChange = (val) => {
    setAdd({ ...add, id: uuidv4(), texte: val, isDone: false })
  }




  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <InputGroup style={{ width: '500px' }} className="mb-3">
        <Form.Control

          placeholder="WriteToDo"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"

          name="texte"

          onChange={(e) => handleChange(e.target.value)}
        />

        <Button variant="outline-secondary" id="button-addon2" onClick={() => dispatch(Add(add))}>
          ADD
        </Button>

      </InputGroup>

    </div>
  )
}

export default AddTask



