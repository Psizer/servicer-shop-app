import React from 'react'
import {Container, ListGroup} from 'react-bootstrap'

const About = () => {
    return (
        <>
            <Container style ={{marginTop:"50px"}}>
                <h1>Team Members</h1> 
                <ListGroup>
                <ListGroup.Item>Mangal Tomar</ListGroup.Item>
                <ListGroup.Item>Rohit Bohara</ListGroup.Item>
                <ListGroup.Item>Mukesh Kumar</ListGroup.Item>
                <ListGroup.Item>Niranjan Upari</ListGroup.Item>
                <ListGroup.Item>Pavan Choudhari</ListGroup.Item>
                <ListGroup.Item>Prashant Pandit</ListGroup.Item>
                </ListGroup>
                <h1>Our Services</h1>
                <p> We have taken multiple steps to ensure a hygienic service 
                    experience in the safety of your home. Our professionals wear masks,
                    gloves and sanitise all equipment before service. Through the app,
                    you can book at home services - 
                    from beauty and wellness for women and men,
                    to home repairs and maintenance, such as AC 
                    servicing, electrician, plumber and carpenter. The complete list of at 
                    home services is as follows:</p>
                <h6>Beauty and Wellness:</h6><p> Salon at home, Spa at Home, Party Make-up, Parlour at Home, Massage at Home, Haircut for Men

Health at Home: Yoga Trainers, Fitness Trainers

Repairs: Electricians, Plumbers, Carpenters, AC repair, Washing Machine Repair, Refrigerator Repair, RO or Water Purifier Repair, Microwave Repair, Geyser Repair, Chimney and Hob Repair

Cleaning and Pest Control: Home Deep Cleaning, Pest Control, Bathroom Cleaning, Sofa Cleaning, Kitchen Cleaning, Carpet Cleaning, Car Cleaning

Home Projects: Home Painters, Packers and Movers

Choose from over 50+ services and book home services on the app based on pre-approved prices. Avail at-home services from trusted and background-verified professionals.
</p>
            </Container>
        </>
    )
}

export default About;
