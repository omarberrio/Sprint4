// reducer.js

// Definir los tipos de acciones (puedes personalizarlos según tus necesidades)
export const initialState = {
    basket:[]
}


export const actionTypes = {
    ADD_TO_CART: "ADD_TO_BASKET",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
  };

  export const getBasketTotal = (basket)=>{
    return basket?.reduce((amount, item) => item.price + amount,0)
  }
  
  // Función reductora
  const reducer = (state, action) => {
    console.log(action) 
    console.log(" TEST1") 
    switch (action.type) {
      case "ADD_TO_BASKET":
        console.log("Adicionado") 
        // Lógica para agregar un elemento al carrito
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      case actionTypes.REMOVE_FROM_CART:
        // Lógica para eliminar un elemento del carrito
        const index = state.basket.findIndex(basketItem => basketItem.id ===action.id)
        let newBasket =[...state.basket];
        if(index>=0){
          newBasket.splice(index,1)
        }
        else {
          console.log ("no pudo remover el producto")
        }
        return {
          
          ...state,
          basket: newBasket,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  