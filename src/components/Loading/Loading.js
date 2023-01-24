import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center mt-4'>
            <Spinner style={{height:'100px' ,width:'100px'}} animation="border" variant="danger" />
        </div>
    );
};

export default Loading;