"use client"; // This tells Next.js that this component should be rendered on the client side

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './Carousel.module.css'; // Import the CSS module

export default class NextJsCarousel extends Component {
    state = {
        currentSlide: 0,
    };

    handleChange = (index) => {
        this.setState({ currentSlide: index });
    };

    render() {
        const { currentSlide } = this.state;
        return (
            <div className={styles.carouselRoot}> {/* Apply the styles using className */}
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    transitionTime={500}
                    selectedItem={currentSlide}
                    onChange={this.handleChange}
                >
                    <div className={styles.slide}>
                        <img src="/351136736_922327745665666_7471140029264396010_n.jpg" alt="image1" />
                        <p className={styles.legend}>Investor meeting</p>
                    </div>
                    <div className={styles.slide}>
                        <img src="/344402803_3415793318659721_6628649882931481692_n.jpg" alt="image2" />
                        <p className={styles.legend}>Revenue meeting</p>
                    </div>
                    <div className={styles.slide}>
                        <img src="/Nairobi-City-County-15-2.jpg" alt="image3" />
                        <p className={styles.legend}>Our future city</p>
                    </div>
                    <div className={styles.slide}>
                        <img src="/images.jpg" alt="image4" />
                        <p className={styles.legend}>Governor Lusaka</p>
                    </div>
                    <div className={styles.slide}>
                        <img src="/Nabuyole-Falls.jpg" alt="image5" />
                        <p className={styles.legend}>Nabuyole Water Falls</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

