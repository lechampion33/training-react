// import * as React from 'react';
import React,{Component} from 'react';
import './App.css';
// import { Button } from '@mui/material';
// import VpnKeyIcon from '@mui/icons-material/VpnKey';
// import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
// import ScubaDivingIcon from '@mui/icons-material/ScubaDiving';
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import ButtonGroup from '@mui/material/ButtonGroup';
// import LoginIcon from '@mui/icons-material/Login';
// import LogoutIcon from '@mui/icons-material/Login';
// function App() {
//   return (

//     <div className="App">
//       <ButtonGroup variant="contained">
//         <Button endIcon={<LoginIcon />} color="primary">Login</Button>
//         <Button startIcon={<LogoutIcon />} color="secondary">Logout</Button>
//       </ButtonGroup>
//     </div>
//   );
// }
import ErrorBoundary from './ErrorBoundary';
import Counter from './counter';
export function App()
{
      return (
          
          <div style={{ textAlign: "center" }}>
          <ErrorBoundary>
            <Counter />
         
          </ErrorBoundary>
           </div>
      );
      }
 
   
export default App;
