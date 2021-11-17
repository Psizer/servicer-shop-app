import { Button } from 'bootstrap'
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {FaRupeeSign} from 'react-icons/fa'
import {BsEmojiHeartEyes} from 'react-icons/bs'

const Checkout = () => {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems;
    const subTotal = cartItems.reduce((X,item) => X + item.price,0)
    localStorage.cartItems=[]

    const checkout = () =>{
        window.location.href="/"
        localStorage.cartItems = []
    }

    return (
        <div style={{marginTop:"100px"}}>
            <Container style={{font:"serif"}}>
                <Row>
                <Col md={6}>
                <div style={{border:"2px dotted green",padding:"20px", margin:"20px",fontFamily:"Cursive"}}>
                    <h1>Your orders are Placed</h1>
                    <h2>Thank You! Shop Again with us!</h2>
                    <h2>Happy Shopping <BsEmojiHeartEyes/></h2>
                </div>
                <button onClick={checkout} style={{marginLeft:"120px",width:"300px",height:"100px",backgroundColor:"aqua",fontWeight:"bold"}}>Back To Shopping!</button>
 
                </Col>
            <Col md={6}>
                <div style={{border:"2px dotted green",padding:"20px", margin:"20px",fontFamily:"Cursive"}}>
                    <h2>Your Order Details:</h2>
                    <hr/>
                    {
                        cartItems.map(item =>(
                            <>
                                    {item.name}[{item.varient}]
                                <h6>
                                    Price: {item.prices[0][item.varient]}
                                </h6>
                                <hr/>
                            </>
                        ))
                        
                    }
                    <h2>Total Amount: <FaRupeeSign/>{subTotal} /-</h2>
                </div>
            </Col>
            </Row>
            </Container>
        </div>
        
    )
        

}

export default Checkout
