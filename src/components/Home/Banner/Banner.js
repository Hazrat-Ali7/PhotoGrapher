import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>

                <Carousel.Item>
                    <img className='img-fluid' src={banner3} height={600} alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className='img-fluid' src={banner2} height={600} alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className='img-fluid' src={banner1} height={600} alt="" />
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
};

export default Banner;