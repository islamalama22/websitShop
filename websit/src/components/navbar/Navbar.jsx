import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from '@mui/material';
import {Link as RouterLink, useNavigate} from 'react-router-dom'    
import useAuthStore from '../../store/authStore';
function Navbar() {

 //  using  the zustand
 const token=useAuthStore((state)=>state.token);
 const logout=useAuthStore((state)=>state.logout);
const user=useAuthStore((state)=>state.user);

  const navigate=useNavigate();
  console.log(' user data :')
  console.log(user);
  
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
            <Link component={RouterLink} to='/home' color='inherit' underline='none' > HOME </Link>
          </Typography>

          <Box sx={{display:'flex', gap:2 ,alignItems:'center'}}>
            { token!=null ?
            <>
            <Typography textAlign={'center'} textTransform={'capitalize'}> welcom {user?.name}</Typography>
            <Link component={RouterLink} textTransform={'capitalize'} to='/cart' color='inherit' underline='none' > cart</Link>
            <Button   color='inherit'   onClick={handleLogout} > logout</Button>

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
