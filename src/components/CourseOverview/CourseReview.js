import { Box, Typography, Paper, Container, Grid } from '@mui/material';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import reviewDesign from '../../Images/reviewdesign.png'
import { styled } from '@mui/material/styles';
import conorOne from '../../Images/conorone.png'
import conorTwo from '../../Images/conortwo.png'
import conorThree from '../../Images/conorThree.png'
import conorFour from '../../Images/conorFour.png'
import Tagline from 'components/Shared/Tagline';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CourseReview = () => {
    return (
        <>
            <Box sx={{ height: { xl: '800px', xs: '1200px' } }}>
                <Container maxWidth='xl'>
                    <Box sx={{ display: 'flex', position: 'relative', alignItems: 'center', marginTop: '40px' }} >
                        <Tagline>Reviews of This Course</Tagline> <Box sx={{ marginLeft: '30px' }}><Image src={reviewDesign} />
                            <Typography sx={{ position: 'absolute', left: { xl: '680px', xs: '200px' }, top: { xl: '22px', xs: '23px' } }}><FaStar style={{
                                color: '#FFB300'
                            }} /> 4.8 User Rating</Typography></Box>
                    </Box>
                    <Box sx={{ flexGrow: 1, paddingTop: '100px' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} xl={6} md={12}>
                                <Item>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box>
                                                <Image src={conorOne} />
                                            </Box>
                                            <Box sx={{ marginTop: '-80px' }}>
                                                <Typography>Connor Morgan</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ marginTop: '-80px', marginRight: '30px' }}>
                                            <Typography>3 days Ago</Typography>
                                        </Box>
                                    </Box>
                                    <Box><Typography sx={{ textAlign: 'left', marginLeft: '40px', marginTop: '-50px' }}>This course has some very interesting tips that one can apply when communicating with your customers. Some of these tips are extremely valuable and useful! This is by far one of the best.</Typography></Box>
                                </Item>
                            </Grid>
                            <Grid item xs={12} xl={6} md={12}>
                                <Item>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box>
                                                <Image src={conorOne} />
                                            </Box>
                                            <Box sx={{ marginTop: '-80px' }}>
                                                <Typography>Connor Morgan</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ marginTop: '-80px', marginRight: '30px' }}>
                                            <Typography>3 days Ago</Typography>
                                        </Box>
                                    </Box>
                                    <Box><Typography sx={{ textAlign: 'left', marginLeft: '40px', marginTop: '-50px' }}>This course has some very interesting tips that one can apply when communicating with your customers. Some of these tips are extremely valuable and useful! This is by far one of the best.</Typography></Box>
                                </Item>
                            </Grid>
                            <Grid item xs={12} xl={6} md={12}>
                                <Item>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box>
                                                <Image src={conorOne} />
                                            </Box>
                                            <Box sx={{ marginTop: '-80px' }}>
                                                <Typography>Connor Morgan</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ marginTop: '-80px', marginRight: '30px' }}>
                                            <Typography>3 days Ago</Typography>
                                        </Box>
                                    </Box>
                                    <Box><Typography sx={{ textAlign: 'left', marginLeft: '40px', marginTop: '-50px' }}>This course has some very interesting tips that one can apply when communicating with your customers. Some of these tips are extremely valuable and useful! This is by far one of the best.</Typography></Box>
                                </Item>
                            </Grid>
                            <Grid item xs={12} xl={6} md={12}>
                                <Item>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box>
                                                <Image src={conorOne} />
                                            </Box>
                                            <Box sx={{ marginTop: '-80px' }}>
                                                <Typography>Connor Morgan</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ marginTop: '-80px', marginRight: '30px' }}>
                                            <Typography>3 days Ago</Typography>
                                        </Box>
                                    </Box>
                                    <Box><Typography sx={{ textAlign: 'left', marginLeft: '40px', marginTop: '-50px' }}>This course has some very interesting tips that one can apply when communicating with your customers. Some of these tips are extremely valuable and useful! This is by far one of the best.</Typography></Box>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
export default CourseReview;