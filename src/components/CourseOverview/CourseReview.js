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
            <Box sx={{ height: '800px' }}>
                <Container maxWidth='xl'>
                    <Box sx={{ display: 'flex', position: 'relative', alignItems: 'center', marginTop: '40px' }} >
                        <Tagline>Reviews of This Course</Tagline> <Box sx={{ marginLeft: '30px' }}><Image src={reviewDesign} />
                            <Typography sx={{ position: 'absolute', left: { xl: '680px', xs: '200px' }, top: { xl: '22px', xs: '23px' } }}><FaStar style={{
                                color: '#FFB300'
                            }} /> 4.8 User Rating</Typography></Box>
                    </Box>

                </Container>
            </Box>
        </>
    );
}
export default CourseReview;