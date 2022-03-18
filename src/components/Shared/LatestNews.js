import { Box, Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import Carousel from '../shared/Carousel';
import TagLine from '../shared/Tagline';


const settings = {
    dotsClass: 'latest-news-dots',
    className: 'center',
    arrows: false,
    dots: true,
    infinite: false,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    speed: 500
};

const LatestNews = () => {
    return (
        <Box sx={{ backgroundColor: '#FFF6F6', padding: '50px 0' }} >
            <Typography sx={{ textAlign: 'center', padding: '50px 0' }} ><TagLine>Our Latest News</TagLine></Typography>
            <Container>

                <Box>
                    <Slider {...settings}>

                    </Slider>
                </Box>
            </Container >
        </Box >
    );
};

export default LatestNews;


