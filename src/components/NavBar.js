import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'; // Importa el componente Link
import logo from "../assets/Depositphotos_3595184_XL.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import {useStateValue} from "../StateProvider"




export default function ButtonAppBar() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Envuelve el IconButton en el componente Link */}
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <div style={{ width: '100px', height: 'auto' }}>
                <img src={logo} alt="Logo" style={{ width: '100%', height: 'auto' }} />
              </div>
            </IconButton>
          </Link>
          <Typography variant="h6" color="textPrimary" component="p" sx={{ marginLeft: 'auto', marginRight: '16px' }}>
            Hola Invitado
          </Typography>

          <Link to="/signin">
          <Button color="inherit" sx={{ color: 'textPrimary' }}>
            Ingresar
          </Button>

          </Link>
          

          <Link to="/checkout-page">
          <IconButton style={{ color: 'black' }}>
            <Badge badgeContent={basket?.length} color="secondary">
              <ShoppingCartIcon fontSize='large' />
            </Badge>
          </IconButton>
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
