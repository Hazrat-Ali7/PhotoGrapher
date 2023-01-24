import React, { useEffect, useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('cardData.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    return (
        <div className='container'>
            <h2 className='text-danger text-center my-5'>My Services</h2>

            <div className='mx-auto my-5'>
                <Row className='g-4' md={2} lg={3} xs={1}  >
                    {
                        carts.map(cart => <Service
                            key={cart.id}
                            cart={cart}
                        ></Service>)
                    }
                </Row>
            </div>




        </div>
    );
};

export default Services;