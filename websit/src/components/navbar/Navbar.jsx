import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import {Link as RouterLink, useNavigate} from 'react-router-dom'    
import { AuthContext } from '../../context/AuthContext';
function Navbar() {
  const {token,logout}=useContext(AuthContext);

  const navigate=useNavigate();
  
  //  
  const  handleLogout=()=>{
    logout();
    navigate('/login');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Box sx={{display:'flex', gap:2 ,alignItems:'center'}}>
            <Link component={RouterLink} to='/home' color='inherit' underline='none' > home</Link>
            { token!=null ?
            <>
            <Link component={RouterLink} to='/cart' color='inherit' underline='none' > cart</Link>
            <Button   color='inherit'  onClick={handleLogout} > logout</Button>

            </> : 
            
            <>
            <Link component={RouterLink} to='/register'  color='inherit' underline='none'> register</Link>
            <Link  component={RouterLink} to='/login' color='inherit' underline='none' > login</Link>

            </>
            
            }
          
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar
