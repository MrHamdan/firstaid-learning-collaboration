import { Box, Container, Typography } from '@mui/material';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import Carousel from '../shared/Carousel';
import TagLine from '../shared/Tagline';
import NewsCard from '../Shared/NewsCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/LatestNews.module.css"

const settings = {
    dots: true,
    className: "slick-center ",
    // dotsClass: `${styles.slick_dots}`,
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    speed: 500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                infinite: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
            }
        }
    ]
};

const LatestNews = ({ newses }) => {

    const sliderRef = useRef(null);
    console.log(sliderRef);
    return (
        <Box sx={{ backgroundColor: '#FFF6F6', padding: '50px 0' }} >
            <Typography sx={{ textAlign: 'center', padding: '50px 0' }} ><TagLine>Our Latest News</TagLine></Typography>
            <Container sx={{ maxWidth: { xl: 'xl', lg: 'lg' } }}>
                <Slider ref={sliderRef} {...settings}>
                    {
                        newses.map(news =>
                            <NewsCard key={news.id} news={news} />
                        )
                    }
                </Slider>
            </Container >
        </Box >
    );
};

export default LatestNews;
