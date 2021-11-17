import React,{useState} from 'react'
import {Container,Form, Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {registerUser} from '../actions/userAction'
import Success from './Success'
import Error from './Error'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const registerState = useSelector(state => state.registerUserReducer)
    const {error,success,loading} = registerState

    const dispatch = useDispatch()

    const registerhandler = () =>{
        if(password !== confirmPassword){
            alert('Password do not match')
        }else{
            const user = {name,email,password,confirmPassword}
            dispatch(registerUser(user))
            window.location.href = "/login"
        }
    }
    return (
        <>
        <Container style={{padding:"20px" ,border:"5px solid aqua", width:"400px", marginTop:"80px", backgroundColor:"white"}}>
            {success && <Success success="User Register Successfully!!"/>}
            {error && <Error>{error}</Error>}
            <Form>
                <h1 style={{fontFamily:"serif"}}>Registration</h1>
                <hr/>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Enter Your Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Your Password" />
                </Form.Group>
                <Button onClick={registerhandler} variant="primary">
                    Register
                </Button>
            </Form>
        </Container>
        </>
    )
}

export default Register
