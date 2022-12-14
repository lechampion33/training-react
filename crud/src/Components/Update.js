import React, {useState, useEffect} from 'react'
import {FormControl, InputLabel, Input, Button, FormControlLabel, Checkbox, FormLabel, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useStyle } from './Create';
import axios from 'axios';
import { API_URL } from '../Constants/URL';

const Update = () => {
  const classes = useStyle()
  const [username, setUsername] = useState('')
  const [create_password, setCreate_password] = useState('')
  const [confirm_password, setConfirm_password] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [toggle, setToggle] = useState(false)
  const [id, setId] = useState('')

  const addUsername = (e) => {
    setUsername(e.target.value)
  }
  const addCreate_password = (e) => {
    setCreate_password(e.target.value)
  }
  const addConfirm_password = (e) => {
    setConfirm_password(e.target.value)
  }
  const addEmail = (e) => {
      setEmail(e.target.value)    
  }
  const addPhone_number = (e) => {
      setPhone_number(e.target.value)
  }
  const Checked = () => {
      setToggle(!toggle)
  }

  const updateUser = async () => {
    await axios.put(API_URL + id, {
      username,
      create_password,
      confirm_password,
      email,
      phone_number,
      toggle
    })
  }

  useEffect(() => {
    setId(localStorage.getItem('id'))
    setUsername(localStorage.getItem('username'))
    setCreate_password(localStorage.getItem('create_password'))
    setConfirm_password(localStorage.getItem('confirm_password'))
    setEmail(localStorage.getItem('email'))
    setPhone_number(localStorage.getItem('phone_number'))
    setToggle(localStorage.getItem('toggle'))
}, [])

  return (
    <>
      <Link style={{textDecoration: 'none', color: 'inherit'}} to="/read"><Button variant='contained' color='primary'>View Contacts</Button></Link>
      <form onSubmit={updateUser} className={classes.formStyle}>

          <FormLabel component="legend">Create New Contact</FormLabel>

          <FormControl className={classes.inputForm}>
              <InputLabel>Username</InputLabel>
              <Input value={username} onChange={addUsername} placeholder='Username'/>
          </FormControl>

          <FormControl className={classes.inputForm}>
          <InputLabel>create_password</InputLabel>
              <Input value={create_password} onChange={addCreate_password} placeholder='Create_pass'/>
          </FormControl>

          <FormControl className={classes.inputForm}>
          <InputLabel>confirm_password</InputLabel>
              <Input value={confirm_password} onChange={addConfirm_password} placeholder='Confirm_pass'/>
          </FormControl>

          <FormControl className={classes.inputForm}>
              <InputLabel>Email</InputLabel>
              <Input value={email}  onChange={addEmail} placeholder='Enter Email'/>
          </FormControl>

          <FormControl className={classes.inputForm}>
              <InputLabel>phone_number</InputLabel>
              <Input value={phone_number}  onChange={addPhone_number} placeholder={'Enter Mobile Number'}/>
          </FormControl>
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='/read'><Button type='submit' variant='contained' color='secondary' className={classes.myBtn} onClick={updateUser}>Commit Changes</Button></Link>
      </form>
    </>

  )
}

export default Update