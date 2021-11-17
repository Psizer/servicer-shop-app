import React from 'react'
import {Container,Row,Col, Table, Button,Nav} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {deleteFromCart} from '../actions/cartAction'

import {FaTrash} from 'react-icons/fa'
const CartScreen = () => {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.loginUserReducer)
    const { currentUser } = userState;
    const subTotal = cartItems.reduce((X,item) => X + item.price,0)
    const checkout = () =>{
        localStorage.cartItems = []
    }
    return (
        <> 
            <Container>
            <Table striped bordered hover style={{marginTop:"80px"}}>
                <thead>
                    <tr>
                    <th md={6}>Cart Items</th>
                    <th md={6}>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                        { currentUser?
                                cartItems.map(item =>(
                                    <>
                                            {item.name}[{item.varient}] &nbsp; &nbsp; <img alt={item.name} src={item.image} style={{width:'80px', height:"80px",marginBottom:"5px" ,borderRadius:"20px"}}></img>
                                        <h6>
                                            Price: {item.prices[0][item.varient]}
                                        </h6>
                                        <h6>
                                            <FaTrash className="text-danger"
                                            style={{cursor:"pointer"}} 
                                            onClick={() =>{
                                                dispatch(deleteFromCart(item))
                                            }} />
                                        </h6>
                                    <hr/>
                                    </>
                                )) : <h1>Login/Signup To Book Your Service</h1>
                            }
                    </td>
                    {localStorage.cartItems?  
                    <td>Sub Total  <h1>Rs: {subTotal} /-</h1>
                    <Button href="/checkout">Checkout</Button></td> :<td></td> }
                    </tr>
                </tbody>
            </Table>
            </Container>
        </>
    )
}

export default CartScreen
