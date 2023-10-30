// TotalComponent.js

import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import accounting from 'accounting';
import {getBasketTotal} from "../reducer"
import {useStateValue} from "../StateProvider"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
  },

  button:{
    marginTop: "2rem"
  }
  
}));



const Total = () => {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className={classes.root}>
      <h5>Total items: {basket?.length}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket), 'COP')}</h5>
      <Button className={classes.button} variant="contained" color="secondary">
        Pagar ahora
      </Button>
    </div>
  );
};

export default Total;
