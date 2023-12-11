import React from 'react';
import { Row } from 'react-bootstrap';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-dark text-muted text-center'>
            <p className='py-5'>Copyright @ 2024-All Right Reserved By Hazrat Ali</p>
        </div>
    );
};

export default Footer;