import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
//import FavoriteIcon from '@mui/icons-material/Favorite';
//import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from 'accounting';
import { actionTypes } from '../reducer';
import {useStateValue} from "../StateProvider"

//import products from '../product-data'


export default function Product({product : {id, name, productType, image, price, rating, description}}) {
  
  // const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);


  };

  

/*    const addToBasket=()=>{
     dispatch({
      type: actionType.ADD_TO_BASKET,
      item:{
       id:id,
        name:name,
      productType:productType,
       image:image,
       price:price,
        rating:rating,
        description:description
       }
     })
   }

  */

   const addToBasket = () => {
    // Utiliza dispatch para agregar el producto al carrito
    dispatch({
      type: actionTypes.ADD_TO_CART, // Asegúrate de que el tipo sea correcto
      item: {
        id: id,
        name: name,
        productType: productType,
        image: image,
        price: price,
        rating: rating,
        description: description,
      },
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
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart" onClick={addToBasket} >
          <AddShoppingCartIcon />
        </IconButton>
        {Array(rating).fill().map((_, i) => (
          <p key={i}>&#11088;</p>
        ))}
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

