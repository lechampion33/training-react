import axios from "axios"
import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { API_URL } from "../Constants/URL";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import EditNotificationsOutlinedIcon from '@mui/icons-material/EditNotificationsOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useStyle } from "./Create";

const Read = () => {
  const [apiData, setAPIData] = useState([]);

  const deleteUser = async (id) => {
    await axios.delete(API_URL + id)
    callgetAPI()
  }

  const callgetAPI = async () => {
    const resp = await axios.get(API_URL);
    setAPIData(resp.data)
  }

  useEffect(() => {
    callgetAPI();
  }, []);

  const classes = useStyle();

  const updateUser = ({username,create_password,confirm_password,email,phone_number, toggle, id}) => {
    localStorage.setItem('id', id)
    localStorage.setItem('username', username)
    localStorage.setItem('create_password', create_password)
    localStorage.setItem('confirm_password', confirm_password)
    localStorage.setItem('email', email)
    localStorage.setItem('phone_number', phone_number)
    localStorage.setItem('toggle', toggle)
  }

  return (
    <>
    <Link style={{textDecoration: 'none', color: 'inherit'}} to="/"><Button color="primary" variant="contained" className={classes.mb}><AddOutlinedIcon/></Button></Link>
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">create_password</TableCell>
            <TableCell align="right">confirm_password</TableCell>
            <TableCell align="right">Email Address</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Favorites</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { apiData.map(data => (
            <TableRow
              key={data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{data.username}</TableCell>
              <TableCell align="right">{data.create_password}</TableCell>
              <TableCell align="right">{data.confirm_password}</TableCell>
              <TableCell align="right">{data.email}</TableCell>
              <TableCell align="right">{data.phone_number}</TableCell>
              <TableCell align="right">{data.toggle ? 'Favorites' : 'None'}</TableCell>
              <TableCell align="right"><Button onClick={() => deleteUser(data.id)} style={{backgroundColor: 'pink'}}><DeleteForeverOutlinedIcon/></Button></TableCell>
              <TableCell align="right"><Link style={{textDecoration: 'none', color: 'inherit'}} to='/edit'><Button onClick={() => updateUser(data)} style={{borderColor: 'green'}} variant="outlined"><EditNotificationsOutlinedIcon fontSize="small"/></Button></Link></TableCell>
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Read