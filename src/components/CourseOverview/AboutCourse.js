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

// { xl: '800.89px', xs: '1400px', md: '1450px' }

const Styles = {
    detailBackground: {
        backgroundImage: `url(${detailBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
    }
}


const AboutCourse = () => {
    return (
        <>
            <Box sx={{ ...Styles.detailBackground }}>
                <Container maxWidth='xl' sx={{ padding: '50px 0px' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} xl={6} md={12}>
                                <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                    <Typography sx={{ fontSize: '36px', fontStyle: 'normal', fontWeight: '500', color: 'white', lineHeight: '145%' }}>Level 2 Food Hygiene and Safety for Catering</Typography>
                                    <Typography sx={{ margin: '50px 0px' }}><span style={{ fontSize: '16px', fontStyle: 'normal', fontWeight: '400', color: 'white', lineHeight: '32px', marginRight: '20px' }}>4.8 <FaStar style={{
                                        color: '#FFB300'
                                    }} /></span> <span style={{ fontSize: '16px', fontStyle: 'normal', fontWeight: '400', color: 'white', lineHeight: '32px', marginTop: '50px', marginBottom: '29px', marginRight: '20px' }}>(50 REVIEWS)</span> <span style={{ fontSize: '16px', fontStyle: 'normal', fontWeight: '400', color: 'white', lineHeight: '32px', marginTop: '50px', marginBottom: '29px', marginRight: '20px' }}>6245 STUDENTS</span></Typography>
                                    <Typography sx={{ fontSize: '18px', fontStyle: 'normal', fontWeight: '400', color: 'white', lineHeight: '145%' }}>We are a company who is best known for offering awarding body accredited courses for anyone who wishes to take their professional life to the next level.</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={12} xl={6} md={12}>
                                <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}><Image src={detailImg} /></Item>
                            </Grid>
                            <Grid item xs={12} xl={6} md={12}>
                                <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} xl={6} md={6}>
                                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', xl: 'left' } }}>
                                                    <Box>
                                                        <Image src={certificateIcon} />
                                                    </Box>
                                                    <Box sx={{ textAlign: 'left', marginLeft: '30px' }}>
                                                        <span>You will Get</span> <br /> <span>Certificate of Completion</span>
                                                    </Box>
                                                </Box>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} xl={6} md={6}>
                                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', justifyContent: { xs: 'center', xl: 'left' } }}>
                                                    <Box>
                                                        <Image src={documentIcon} />
                                                    </Box>
                                                    <Box sx={{ textAlign: 'left', marginLeft: '30px' }}>
                                                        <span>Renewal Requirements</span> <br /> <span>Check with your Employer</span>
                                                    </Box>
                                                </Box>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} xl={6} md={6}>
                                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', justifyContent: { xs: 'center', xl: 'left' } }}>
                                                    <Box>
                                                        <Image src={clockIcon} />
                                                    </Box>
                                                    <Box sx={{ textAlign: 'left', marginLeft: '30px' }}>
                                                        <span>Course Duration</span> <br /> <span>4 Hours 32 Minutes</span>
                                                    </Box>
                                                </Box>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} xl={6} md={6}>
                                            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', justifyContent: { xs: 'center', xl: 'left' } }}>
                                                    <Box>
                                                        <Image src={supportIcon} />
                                                    </Box >
                                                    <Box sx={{ textAlign: 'left', marginLeft: '30px' }}>
                                                        <span>Support</span> <br /> <span>24/7 Customer Support</span>
                                                    </Box>
                                                </Box>
                                            </Item>
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Grid>
                            <Grid item xs={12} xl={6} md={12} sx={{ marginTop: '90px' }}>
                                <Item sx={{ backgroundColor: 'transparent', boxShadow: '0' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                        <Box>
                                            <del>$100.00</del> <br /> <span>75% off</span>
                                        </Box>
                                        <Box>
                                            <span>£25.00</span>
                                        </Box>
                                        <Box>
                                            <PrimaryButton>BUY NOW</PrimaryButton>
                                        </Box>
                                    </Box>
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