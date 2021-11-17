import React, {useState} from 'react'
import {Card, Button,Row,Col, Modal} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { addToCart} from '../actions/cartAction'
const Service = ({service}) => {
    const [varient, setVarient] = useState('normal')
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()

    const addToCartHandler = () => {
        if(localStorage.getItem('currentUser')===null){
            window.location.href = "/login"
        }else{
            dispatch(addToCart(service,varient))
            alert("Item is added to the cart")
        }
        // dispatch(addToCart(service,varient))
        // alert("Item is added to the cart")
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '18rem', marginTop:"20px" }}>
                <Card.Img variant="top" src={service.image} onClick={handleShow} style={{cursor:"pointer"}}/>
                <Card.Body>
                    <Card.Title onClick={handleShow} style={{fontWeight:"bold",cursor:"pointer"}}>{service.name} &nbsp;&nbsp;<Button variant="success">Book Now!</Button></Card.Title>
                    <hr/>
                    <Card.Text>
                        {service.description}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} style={{fontFamily:"serif",fontWeight:"bold"}}>
                <Modal.Header closeButton>
                <Modal.Title>{service.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Card.Img variant="top" src={service.image} />
                    </div>
                <Modal.Footer>
                <Row>
                        <Col md={6}>
                            <h6 style={{fontFamily:"serif",fontWeight:"bold"}}>Packages</h6>
                            <select value={varient} onChange={e => setVarient(e.target.value)}>
                                {service.varients.map(varient =>(
                                    <option>{varient}</option>
                                ))}
                            </select>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col md={6} style={{fontFamily:"serif",fontWeight:"bold"}}>Price : {service.prices[0][varient]} /-</Col>
                        <Col md={6}>
                            <Button onClick={addToCartHandler}
                             className="bg-warning text-white">Book Your Service</Button>
                        </Col>
                    </Row>
                </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Service
