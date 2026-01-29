import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { ButtonBase, Link } from '@mui/material';
import {Link as RouterLink, useNavigate} from 'react-router-dom'    
import useAuthStore from '../../store/authStore';
import { useTranslation } from 'react-i18next';
import useThemeStore from '../../store/useThemeStore';
function Navbar() {

 const {t,i18n}=useTranslation();

 //  using  the zustand
 const token=useAuthStore((state)=>state.token);
 const logout=useAuthStore((state)=>state.logout);
const user=useAuthStore((state)=>state.user);

  const navigate=useNavigate();
  console.log(' user data :')
  console.log(user);
  
  
 const toggleLanguge = () => {
    const newLng=i18n.language==='ar'?'en':'ar';
    i18n.changeLanguage(newLng);
  }

  const {mode,toggleTheme}=useThemeStore();

  const  handleLogout=()=>{
    logout();
    navigate('/login');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link component={RouterLink} to='/home' color='inherit' underline='none' > {t('Home')} </Link>
          </Typography>

          <Box sx={{display:'flex', gap:2 ,alignItems:'center'}}>
            { token!=null ?
            <>
            <Typography textAlign={'center'} textTransform={'capitalize'}> {t('wlc')}   {user?.name}</Typography>
            <Link component={RouterLink} textTransform={'capitalize'} to='/Cart' color='inherit' underline='none' > {t('cart')}</Link>
            <Button   color='inherit'   onClick={handleLogout} > {t('logout')}</Button>
            <Link component={RouterLink} textTransform={'capitalize'} to='/Profile' color='inherit' underline='none' > Profile</Link>

            </> : 
            
            <>
            <Link component={RouterLink} to='/register'  color='inherit' underline='none'> {t('register')}</Link>
            <Link  component={RouterLink} to='/login' color='inherit' underline='none' > {t('login')}</Link>

            </>
            
            }
              <Button  color='inherit' onClick={ toggleLanguge }> {i18n.language==="ar"? 'En':'ع'}</Button>
              <Button  color='inherit' onClick={ toggleTheme }> {mode==='dark'?'Light':'Dark'}</Button>

                 </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar
