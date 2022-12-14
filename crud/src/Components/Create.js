import React, { useState } from 'react'
import {FormControl, InputLabel, Input, makeStyles, Button, FormControlLabel, Checkbox, FormLabel, Typography} from '@material-ui/core'
import axios from 'axios';
import { API_URL } from '../Constants/URL';
import { Link } from 'react-router-dom';

export const useStyle = makeStyles({
    formStyle: {
        width: '200px',
        height: '300px',
        paddingLeft: '30px',
        paddingTop: '30px',
        paddingBottom: '30px',
        borderRadius: '10px',
        marginTop: '100px',
        backgroundColor: 'white'
    },
    myBtn:{
        marginTop: '20px',
        width:'auto'
    },
    formControlLabel:{
        color: 'black',
        marginTop: 'auto'
    },
    inputForm:{
        marginTop: '10px'
    },
    mb:{
        marginBottom: '20px'
    }
});

function Create() {
    const classes = useStyle();
    const [username, setUsername] = useState('');
    const [create_password, setCreate_password] = useState('');
    const [confirm_password, setConfirm_password] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [toggle, setToggle] = useState(false);

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
    const PostData = async () => {
        await axios.post(API_URL, {
            username,
            create_password,
            confirm_password,
            email,
            phone_number,
            toggle
        })
    }
    
  return (
    <>
    <Link style={{textDecoration: 'none', color: 'inherit'}} to="/read"><Button variant='contained' color='primary'>View Contacts</Button></Link>
    <form onSubmit={PostData} className={classes.formStyle}>
        <FormLabel component="legend">Create New Contact</FormLabel>
        <FormControl className={classes.inputForm}>
            <InputLabel>Username</InputLabel>
            <Input value={username} onChange={addUsername} placeholder='Enter Full Name'/>
        </FormControl>
        <FormControl className={classes.inputForm}>
            <InputLabel>create_password</InputLabel>
            <Input value={create_password} onChange={addCreate_password} placeholder='Enter Full Name'/>
        </FormControl>
        <FormControl className={classes.inputForm}>
            <InputLabel>Confirm_password</InputLabel>
            <Input value={confirm_password} onChange={addConfirm_password} placeholder='Enter Full Name'/>
        </FormControl>
        <FormControl className={classes.inputForm}>
            <InputLabel>Email</InputLabel>
            <Input value={email}  onChange={addEmail} placeholder='Enter Email'/>
        </FormControl>
        <FormControl className={classes.inputForm}>
            <InputLabel>phone_number</InputLabel>
            <Input value={phone_number}  onChange={addPhone_number} placeholder='Enter Mobile Number'/>
        </FormControl>
        <FormControlLabel className={classes.formControlLabel} control={<Checkbox value={toggle}/>} onChange={Checked} label={<Typography className={classes.formControlLabel}>Add to Favorites</Typography>} /><br/>
        <Button type='submit' variant='contained' color='secondary' className={classes.myBtn} onClick={PostData} ><Link style={{textDecoration: 'none', color: 'inherit'}} to='/read'>Submit</Link></Button>
    </form>
    </>
  )
}

export default Create