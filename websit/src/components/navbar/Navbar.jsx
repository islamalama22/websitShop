import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom'




/* 
<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

 */     
function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Box sx={{display:'flex', gap:2 }}>
            <Link component={RouterLink} to='/home' color='inherit' underline='none' > home</Link>
            <Link component={RouterLink} to='/cart' color='inherit' underline='none' > cart</Link>
            <Link component={RouterLink} to='/auth/register'  color='inherit' underline='none'> register</Link>
            <Link  component={RouterLink} to='/auth/login' color='inherit' underline='none' > login</Link>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar
