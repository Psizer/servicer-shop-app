import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Container,Row,Col} from 'react-bootstrap'
import {getAllServices} from '../actions/serviceAction'
import Service from './Service'
import Error from './Error'
import Loader from './Loader'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const servicestate = useSelector((state) => state.getAllServiceReducer);
    const { loading, services, error } = servicestate;
    useEffect(() => {
        dispatch(getAllServices())
    }, [dispatch]);
    
    return(
        <> 
            <Container style={{marginTop:"70px",fontFamily:"serif"}}>
                { loading ? (
                    <Loader/>
                ) : error ? (
                    <Error>error while fetching services {error}</Error>
                ) : (
                    <Row>
                        { services.map(service =>(
                            <Col md={4}>
                                <Service service={service}/>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </>
    )
}

export default HomeScreen
