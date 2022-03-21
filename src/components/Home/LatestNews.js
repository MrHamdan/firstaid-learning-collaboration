import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import Carousel from '../shared/Carousel';
import TagLine from '../shared/Tagline';
import NewsCard from '../Shared/NewsCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/LatestNews.module.css"

const settings = {
    dots: true,
    className: "center",
    dotsClass: `${styles.slick_dots}`,
    centerMode: true,
    centerPadding: '40%',
    infinite: true,
    slidesToShow: 1,
    speed: 500
};

const LatestNews = ({ newses }) => {
    return (
        <Box sx={{ backgroundColor: '#FFF6F6', padding: '50px 0' }} >
            <Typography sx={{ textAlign: 'center', padding: '50px 0' }} ><TagLine>Our Latest News</TagLine></Typography>
            <Container>
                <Box>
                    <Slider {...settings}>
                        {
                            newses.map(news =>
                                <NewsCard key={news.id} news={news} />
                            )
                        }
                    </Slider>
                </Box>
            </Container >
        </Box >
    );
};

export default LatestNews;


