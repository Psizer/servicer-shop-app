import React from 'react'
import {Container,Row,Col,Table, Form,Button,FormControl} from 'react-bootstrap'
import {FcCellPhone} from 'react-icons/fc'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {GrMapLocation} from 'react-icons/gr'


  
const Contact = () => (
    <>
       <Container style={{marginTop:'50px'}}>
         
       <Row>
           <Col></Col>

           <Col md={6}>
       <Table hover size="sm" className="text-center" style={{border:"2px solid grey", marginTop:"20px", backgroundColor:"lightyellow"}}>
  <thead>
    <tr>
      <th className=" text-center" colSpan={3}>Contact Details</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><FcCellPhone/></td>
      <td>Phone</td>
      <td>1800-180-1234</td>
    </tr>
    <tr>
    <td><HiOutlineMailOpen/></td>
      <td>Email</td>
      <td>help@serviceprovider.com</td>
    </tr>
    <tr>
    <td><GrMapLocation/></td>
      <td>Address</td>
      <td>Pune, MH, India</td>
    </tr>
  </tbody>
</Table>

</Col>
<Col></Col>

</Row>

<Row></Row>
  <Row>
  <Col></Col>
  <Col className=" mb-10 col-md-10 " >

<Form className="col-md-7 mx-auto" style={{backgroundColor:"lightsalmon",padding:"20px" ,border:"5px solid grey", width:"400px", marginTop:"20px"}}>
  <Form.Group as={Row} className="mb-3 col-md-10">

  </Form.Group>
  <Form.Group as={Row} className="mb-3 col-md-10" controlId="formHorizontalName" >
    <Form.Label column sm={4}>
      Name
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="email" placeholder="Enter Full Name" />
    </Col>
  </Form.Group>
  
  <Form.Group as={Row} className="mb-3 col-md-10" controlId="formHorizontalEmail">
    <Form.Label column sm={4}>
      Email
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="email" placeholder="Enter Your mail ID" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3 col-md-10" controlId="formHorizontalPassword">
    <Form.Label column sm={4}>
      Phone No
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="password" placeholder="Enter Your Phone no" />
    </Col>
  </Form.Group>
  
   <Form.Group as={Row} className="mb-3 col-md-10 align-items-between text-center ">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Submit</Button>
    </Col>
  </Form.Group>
</Form>

  </Col>
  <Col></Col>


</Row>
</Container>





    </>
)

export default Contact
