import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef } from 'react';
import CourseCard from './CourseCard';
import Carousel from '../shared/Carousel';
import CarouselButton from '../shared/CarouselButton';
import Content from '../shared/Content';
import Tagline from '../shared/Tagline'
import { useDispatch, useSelector } from 'react-redux';




const Courses = ({ courses }) => {
    const dispatch = useDispatch();
    const sliderRef = useRef(null);


    return (
        <div>
            <Container sx={{
                mt: '50px',
                maxWidth: {
                    lg: 'lg',
                    xl: 'xl'
                }
            }}>
                <Tagline>Interacting First Aid Courses</Tagline>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
                    <Content>
                        <Typography component='span'>
                            We are a company who is best known for offering awarding body accredited courses for anyone who wishes to <br /> take their professional life to the next level.
                        </Typography>
                    </Content>
                    <Box >
                        <CarouselButton sliderRef={sliderRef} />
                    </Box>
                </Box>

                <Box sx={{ backgroundColor: '#FEF9F7', mt: '30px', padding: '10px' }}>
                    <Carousel sliderRef={sliderRef}
                        content={courses?.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    />
                </Box>


            </Container>
        </div>
    );
};

export default Courses;