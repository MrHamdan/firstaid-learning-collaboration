import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Content from './Content';
import Tagline from './Tagline';
import styles from "../../styles/LatestNews.module.css"
const NewsCard = ({ news }) => {
    return (
        <Card sx={{ maxWidth: 300 }} className={styles.news_card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={news.cover}
                    alt=""
                />
                <CardContent>
                    <Content fontSize='16px'>{news.date}</Content>
                    <Tagline fontSize="24px">
                        {news.title}
                    </Tagline>
                    <Content fontSize='16px'>{news.details}</Content>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button sx={{ color: "#EA2E10" }}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default NewsCard;