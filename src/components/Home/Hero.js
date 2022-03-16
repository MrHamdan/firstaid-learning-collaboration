import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import HeroCircularLayout from 'components/Shared/HeroCircularLayout';
import PrimaryButton from 'components/Shared/PrimaryButton';
import TagLine from 'components/Shared/Tagline';
import React from 'react';
import styles from '../../styles/Hero.module.css'
import Image from 'next/image';
import doctor_img from '../../images/doctors.png'
import firstaid_box from '../../images/first-aid-box.png'
import quiz_icon from '../../images/grid3.png'
import ArrowIcon from 'components/Shared/ArrowIcon';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';
const Hero = () => {
    return (
        <Container sx={{ maxWidth: { xl: 'xl', lg: 'lg' } }}>
            <Box className={styles.hero_container}>
                <Box className={styles.hero_grid}>
                    <TagLine> <div>Engaging & <br /> Accessible Online Courses</div> </TagLine>
                    <PrimaryButton>Explore Now</PrimaryButton>
                    <Box className={styles.grid_image} sx={{
                        bottom: 0,
                        right: 0,
                        'width': {
                            lg: '50%',
                            xs: '25%'
                        }
                    }}>
                        <Image src={doctor_img} alt='' />
                    </Box>
                    <Box sx={{
                        position: 'absolute', bottom: '-111px',
                        right: '-40px'
                    }}>
                        <HeroCircularLayout />
                    </Box>
                </Box>
                <Box>
                    <Box className={styles.hero_grid} sx={{ height: '250px' }}>
                        <TagLine fontSize='35px'>
                            <div>Trustable First Aid <br /> Courses Online</div>
                        </TagLine>
                        <Box component="span" sx={{ display: 'flex', alignItems: 'center', mt: 1, width: '50%' }}>
                            <ArrowIcon />
                            <Typography sx={{
                                fontWeight: 600,
                                fontSize: '22px',
                                lineHeight: '36px',
                                color: '#272D4E'
                            }}>
                                Watch Promo
                            </Typography>
                        </Box>
                        <Box className={styles.grid_image} sx={{
                            top: '60px',
                            right: '-100px',
                            width: {
                                lg: '50%',
                                xs: '25%'
                            }
                        }}>
                            <Image src={firstaid_box} alt='' />
                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            top: '-40px',
                            right: '-100px'
                        }}>
                            <HeroCircularLayout />
                        </Box>
                    </Box>
                    <Box className={styles.hero_grid} sx={{ height: '240px', mt: '10px' }}>
                        <TagLine fontSize='35px'>
                            <div>Awesome Quizzes <br /> you can explore</div>
                        </TagLine>
                        <Box className={styles.grid_image} sx={{
                            top: '60px',
                            right: '-100px',
                            width: {
                                lg: '50%',
                                xs: '25%'
                            }
                        }}>
                            <Image src={quiz_icon} alt='' />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Link href='/quiz' >
                                <a className={styles.link}>Explore Now</a>
                            </Link>
                            <ArrowRightAltIcon
                                sx={{
                                    color: '#EA2E10',
                                    ml: 1
                                }} />
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: '-40px',
                            right: '-100px'
                        }}>
                            <HeroCircularLayout />
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Container>
    );
};

export default Hero;