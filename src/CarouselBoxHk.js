import { Carousel } from "react-bootstrap";
import React, { Component } from "react";
import slaid1 from './assets/slaid1.jpg';
import slaid2 from './assets/slaid2.jpg';
import slaid3 from './assets/slaid3.jpg';
import slaid4 from './assets/slaid4.jpg';
import slaid5 from './assets/slaid5.jpg';

class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slaid1}
                        alt="Ocean" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slaid2}
                        alt="Mushrooms"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slaid3}
                        alt="Mushrooms"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slaid4}
                        alt="Mushrooms"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slaid5}
                        alt="Mushrooms"/>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBoxHk;
