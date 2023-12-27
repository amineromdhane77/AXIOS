import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';


function Create() {
    const [values,setValues]=useState({
        name:'',
        email:'',
        phone:''
    }
        
    )
    const navigate=useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.get('https://jsonplaceholder.typicode.com/users' ,values)
.then(res =>{
    console.log(res)
    navigate('/')
})
.catch(err=>console.log(err))
    }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
    <h1>Add a User</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setValues({...values ,name: e.target.value })}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" onChange={(e)=>setValues({...values ,email: e.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone" onChange={(e)=>setValues({...values ,phone: e.target.value })} />
      </Form.Group>
      
      <Button variant="success" type="submit">
      Create
      </Button>
      <Link to='/' className='btn btn-primary ms-3'>Back</Link>
    </Form>
    </div>
    </div>
  )
}

export default Create