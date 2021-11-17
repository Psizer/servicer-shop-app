export const addToCart = (service, varient) => (dispatch, getState) =>{
    var cartItem = {
        name: service.name,
        _id: service._id,
        image: service.image,
        varient:varient,
        prices: service.prices,
        price: service.prices[0][varient]
    }
    dispatch({type:"ADD_TO_CART", payload: cartItem});
    localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
}

export const deleteFromCart = (service) => (dispatch, getState)=>{
    dispatch({type:'DELETE_FROM_CART', payload:service})
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}