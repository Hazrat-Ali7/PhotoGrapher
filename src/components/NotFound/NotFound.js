import React from 'react';
import NotFoundPic from '../../images/404.png'

const NotFound = () => {
    return (
        
        <div>
            <h1 className='text-danger text-center'>404 Not Found</h1>
            <img src={NotFoundPic} alt="" />
        </div>

    );
};

export default NotFound;