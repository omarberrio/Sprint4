import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
//import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
//import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import accounting from 'accounting';
//import products from '../product-data';
import '../stylecss/checkoutcard.css'; 
import { actionTypes } from '../reducer';
import {useStateValue} from "../StateProvider"



export default function CheckoutCard({product : {id, name, productType, image, price, rating, description}}) {
  const [expanded, setExpanded] = React.useState(false);

  const [{basket}, dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const removeItem = () => {
    // Utiliza dispatch para agregar el producto al carrito
    dispatch({
      type: actionTypes.REMOVE_FROM_CART, // Asegúrate de que el tipo sea correcto
      
        id: id,

    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            V
          </Avatar>
        }
        action={
          <Typography variant="h5" color="textSecondary">
            {accounting.formatMoney(price, "COP ")}
          </Typography>
        }
        title={name}
        subheader="Disponible"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
        title={name}
      />
      
      <CardActions disableSpacing className="cardRating">
        
          <div className="horizontal-stars">
            {Array(rating).fill().map((_, i) => (
              <p key={i}>&#11088;</p>
            ))}
          </div>
          <IconButton >
            <DeleteIcon fontSize='large' onClick={removeItem}/>
          </IconButton>
        
      </CardActions>
    </Card>
  );
}

export const ClassNames = {
  cardRating: 'card-rating',
};
