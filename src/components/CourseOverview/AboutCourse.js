import { Box, Typography, Paper, Grid, Container } from '@mui/material';
import Image from 'next/image';
import detailBg from '../../Images/detailbackground.png';
import detailImg from '../../Images/detailimage.png';
import styles from "../../styles/CourseOverview.module.css";
import { FaStar } from "react-icons/fa";
import { styled } from '@mui/material/styles';
import certificateIcon from '../../Images/certificateicon.png'
import documentIcon from '../../Images/documenticon.png'
import clockIcon from '../../Images/clockicon.png'
import supportIcon from '../../Images/supporticon.png'
import PrimaryButton from 'components/Shared/PrimaryButton';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Styles = {
    detailBackground: {
        backgroundImage: `url(${detailBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: { xl: '800.89px', xs: '1400px', md: '1450px' },
        width: '100%',
    }
}


const AboutCourse = () => {
    return (
        <>
            <Box sx={{ ...Styles.detailBackground, display: 'flex', alignItems: 'center' }}>
                <Container maxWidth='xl'>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} xl={7} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0', marginTop: { xs: '200px', xl: '0px' } }}>
                                    <Typography sx={{ fontStyle: 'normal', fontWeight: '500', fontSize: { xs: '31px', xl: '36px' }, lineHeight: '145%', color: 'white', marginBottom: { xs: '0px', xl: '30px' } }}>
                                        Level 2 Food Hygiene and Safety for Catering
                                    </Typography>
                                    <Box sx={{ display: 'flex', lineHeight: '32px', marginBottom: '30px', flexDirection: { xs: 'column', xl: 'row' } }}><Typography sx={{ marginRight: '20px', color: 'white' }}>4.8 <FaStar style={{
                                        color: '#FFB300'
                                    }} /></Typography><Typography sx={{ marginRight: '20px', color: 'white' }}>( 50 REVIEWS )</Typography><Typography sx={{ marginRight: '20px', color: 'white' }}>6245 STUDENTS</Typography>
                                    </Box>
                                    <Typography sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px', lineHeight: '145%', color: 'white' }}>We are a company who is best known for offering awarding body accredited courses for anyone <br /> who wishes to take their professional life to the next level.</Typography>
                                    <Grid container spacing={2} sx={{ marginTop: { xl: '200px', xs: '0px' } }}>
                                        <Grid item xs={12} xl={6} md={12}>
                                            <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6} xl={6} md={6}>
                                                        <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}><Image src={certificateIcon} /></Item>
                                                    </Grid>
                                                    <Grid item xs={6} xl={6} md={6}>
                                                        <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}><span sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px' }}>You will get</span> <br /> <span sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px' }}>Certificate</span></Item>
                                                    </Grid>
                                                </Grid>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} xl={6} md={12}>
                                            <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6} xl={6} md={6}>
                                                        <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}><Image src={documentIcon} /></Item>
                                                    </Grid>
                                                    <Grid item xs={6} xl={6} md={6}>
                                                        <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                                            <span sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px' }}>You will get</span> <br /> <span sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px' }}>Certificate</span>
                                                        </Item>
                                                    </Grid>
                                                </Grid>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} xl={6} md={12}>
                                            <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6} xl={6} md={6}>
                                                        <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}><Image src={clockIcon} /></Item>
                                                    </Grid>
                                                    <Grid item xs={6} xl={6} md={6}>
                                                        <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}><span sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px' }}>You will get</span> <br /> <span sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px' }}>Certificate</span></Item>
                                                    </Grid>
                                                </Grid>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} xl={6} md={12}>
                                            <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6} xl={6} md={6}>
                                                        <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}><Image src={supportIcon} /></Item>
                                                    </Grid>
                                                    <Grid item xs={6} xl={6} md={6}>
                                                        <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}><span sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px' }}>You will get</span> <br /> <span sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px' }}>Certificate</span></Item>
                                                    </Grid>
                                                </Grid>
                                            </Item>
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Grid>
                            <Grid item xs={12} xl={5} md={12}>
                                <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                    <Image src={detailImg} />
                                    <Grid container spacing={2} sx={{ marginTop: { xl: '80px', xs: '0px' } }}>
                                        <Grid item xs={2} xl={2} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                                <del>$100.00</del> <br /> <span>75% off</span>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={10} xl={10} md={6}>
                                            <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                                <Typography>£25.00</Typography>
                                                <PrimaryButton>BUY NOW</PrimaryButton>
                                            </Item>
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
export default AboutCourse;