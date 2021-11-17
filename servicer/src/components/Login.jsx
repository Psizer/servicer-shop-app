import React,{useState, useEffect} from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {loginUser} from "../actions/userAction"
const Login = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    useEffect(()=>{
        if(localStorage.getItem('currentUser')){
            window.location.href = "/"
        }
    },[])

    const loginHandler = () => {
        const user = {email,password}
        dispatch(loginUser(user))
    }

    return (
        <>
        <Container style={{backgroundColor:"white",padding:"20px" ,border:"5px solid green", width:"400px", marginTop:"100px"}}>
            <Form>
            <h3 style={{fontFamily:"serif"}}>Login Here...</h3>
            <hr/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)}
                    type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)}
                    type="password" placeholder="Password" />
                </Form.Group>

                <Button onClick={loginHandler} variant="primary">
                    Login
                </Button>
            </Form>
        </Container>
        </>
    )
}

export default Login;
