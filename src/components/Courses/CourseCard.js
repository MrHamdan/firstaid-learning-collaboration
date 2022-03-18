import { Box } from '@mui/system';
import React, { useState } from 'react';
import PeopleIcon from '@mui/icons-material/People';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import Tagline from '../shared/Tagline';
import styles from '../../styles/Courses.module.css'

const CourseCard = ({ course }) => {

    const { id, title, coverImage, enrolledStudents, rating } = course;
    const [isAdded, setIsAdded] = useState(false);

    return (
        <Box sx={{
            my: '30px',
            mr: '10px',
            padding: '10px',
            background: '#FFFFFF',
            boxShadow: '0px 45.799px 106.864px rgba(234, 46, 16, 0.06)',
            borderRadius: '19.0829px'
        }}>

            <Box position='relative'>
                <Typography
                    component='h1'
                    sx={{
                        padding: '5px 10px',
                        position: 'absolute',
                        bottom: '5px',
                        right: '5px',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '6.36097px',
                        display: 'flex',
                        alignItems: 'center',
                        zIndex: 10
                    }}
                >
                    <StarIcon sx={{ color: '#FFCB00' }} />
                    <Tagline fontSize='15px' fontWeight={500} >{rating}</Tagline>
                </Typography>

                <Image width='500px' height='500px' src={coverImage} alt="" />

            </Box>
            <Tagline fontSize="20px">
                <Link href={`/course/${course.id}`} passHref>
                    <a className={styles.link}>{title}</a>
                </Link>
            </Tagline>



            <Box sx={{
                mt: '30px',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <PeopleIcon sx={{ mr: 1, color: '#EA2E10' }} />
                    <span style={{ color: '#435770' }}>{enrolledStudents}</span>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <MilitaryTechIcon sx={{ mr: 1, color: '#EA2E10' }} />
                    <span style={{ color: '#435770' }}>CPD Accrediated</span>
                </Box>

            </Box>


            {
                !isAdded ?
                    <Button variant="outlined" sx={{
                        width: '100%',
                        mt: '50px',
                        border: '2.54439px solid rgba(234, 46, 16, 0.2)',
                        color: '#EA2E10',
                        fontWeight: 600,
                    }}
                    >
                        <ShoppingCartIcon />
                        Add to Cart
                    </Button>
                    :


                    <Button variant="outlined" sx={{
                        width: '100%',
                        mt: '50px',
                        border: '2.54439px solid rgba(234, 46, 16, 0.2)',
                        color: '#EA2E10',
                        fontWeight: 600,
                    }}
                    >
                        <Link href='/cart' passHref>
                            Visit Cart
                        </Link>
                    </Button>

            }


        </Box>
    );
};

export default CourseCard;