import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Update() {
  
  const {id} = useParams()
  const navigate = useNavigate()
  const [values,setValues]=useState({
    name:'',
    email:'',
    phone:''
})
  useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/users/' + id)
  .then(res =>setValues(res.data))
  .catch(err=>console.log(err))
  
  },[])
  const handleUpdates =(e) =>{
    e.preventDefault()
    axios.put('https://jsonplaceholder.typicode.com/users/' + id ,values)
    .then(res =>{
    console.log(res)
    navigate('/')
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
    <h1>Update a User</h1>
    <Form onSubmit={handleUpdates} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={values.name}  onChange={(e)=>setValues({...values ,name: e.target.value })}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email"  value={values.email}  onChange={(e)=>setValues({...values ,email: e.target.value })}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Phone" value={values.phone}  onChange={(e)=>setValues({...values ,phone: e.target.value })}/>
      </Form.Group>
      
      <Button variant="success" type="submit">Update</Button>
      
      
      <Link to='/' className='btn btn-primary ms-3'>Back</Link>
    </Form>
    </div>
    </div>
  )
}

export default Update