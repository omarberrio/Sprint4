import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/Depositphotos_3595184_XL.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <div style={{ width: '100px', height: 'auto' }}>
              <img src={
                logo
                } alt="Logo" style={{ width: '100%', height: 'auto' }} />
            </div>
          </IconButton>
          <Typography variant="h6" color="textPrimary" component="p" sx={{ marginLeft: 'auto', marginRight: '16px' }}>
            Hola Invitado
          </Typography>
          <Button color="inherit" sx={{ color: 'textPrimary' }}>
            Ingresar
            </Button>
          <IconButton style={{ color: 'black' }}>
            <Badge badgeContent={20} color="secondary">
            <ShoppingCartIcon fontSize='large' />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
