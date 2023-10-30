import * as React from 'react';
//import { styled } from '@mui/system';
// import { makeStyles } from '@mui/material/styles'; // Importa makeStyles desde el nuevo módulo
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
//import products from '../product-data';
//import Product from './Product'
import CheckoutCard from './CheckOutCard';
import Total from './Total';
import {useStateValue} from "../StateProvider"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
  },
}));

const CheckoutPage = () => {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();

  function FormRow () {
    return(
    <React.Fragment>
      {basket?.map((item) => (
        <Grid item xs={12} sm={8} md={6} lg={4} >
          <CheckoutCard key={item.id} product={item} />
        </Grid>
      ))}
    </React.Fragment>
  );
};


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align='center' gutterBottom variant='h4'>
            ShoppingCart
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography align='center' gutterBottom variant='h4'>
          <Total/>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
  }

export default CheckoutPage;
