import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Service = (props) => {
    const navigate = useNavigate('')

    const handleCheckOut = () => {
        navigate('/checkout');


    }

    const { name, img, text, price } = props.cart;
    return (

        <Col>
            <Card className='shadow'>
                <Card.Img variant="top" height={300} src={img} />
                <Card.Body className='text-center'>
                    <Card.Title className='text-danger'>{name}</Card.Title>
                    <h6>Price: ${price}</h6>
                    <Card.Text>{text}</Card.Text>
                    <Button onClick={handleCheckOut} variant="danger">Book Now</Button>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default Service;