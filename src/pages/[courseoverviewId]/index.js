// import { Box, Typography, Paper, Grid, Container, Button } from '@mui/material';
// import Image from 'next/image';
// import detailBg from '../../Images/detailbackground.png';
// import detailImg from '../../Images/detailimage.png';
// import styles from "../../styles/CourseOverview.module.css";
// import { FaStar } from "react-icons/fa";
// import { styled } from '@mui/material/styles';
// import certificateIcon from '../../Images/certificateicon.png'
// import documentIcon from '../../Images/documenticon.png'
// import clockIcon from '../../Images/clockicon.png'
// import supportIcon from '../../Images/supporticon.png'
// import PrimaryButton from 'components/Shared/PrimaryButton';
// import Link from 'next/link';
// import TagLine from 'components/Shared/Tagline';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { HiPlusCircle } from "react-icons/hi"
// import { AiOutlineClockCircle } from "react-icons/ai"
// import certificateBg from '../../Images/certificatebackground.png'
// import certificate from '../../Images/certificate.png'
// import reviewDesign from '../../Images/reviewdesign.png'

import CourseOverview from "components/CourseOverview/CourseOverview";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

// const Styles = {
//     detailBackground: {
//         backgroundImage: `url(${detailBg.src})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         height: { xl: '800.89px', xs: '1350px' },
//         width: '100%',
//     }
// }
// const Style = {
//     ul: {
//         listStyle: 'none',
//         display: 'flex',
//         justifyContent: 'space-between',
//         width: '50%',
//         padding: '0 5px'
//     },
//     li: {
//         fontWeight: 500
//     }
// }

// const modules = [
//     {
//         id: "1",
//         name: "Module 1",
//         video: [
//             {
//                 id: "1",
//                 name: 'Video 1'
//             },
//             {
//                 id: "2",
//                 name: "Video 2"
//             },
//             {
//                 id: "3",
//                 name: "Video 3"
//             },
//         ]
//     },
//     {
//         id: "2",
//         name: "Module 2",
//         video: [
//             {
//                 id: "1",
//                 name: 'Video 1'
//             },
//             {
//                 id: "2",
//                 name: "Video 2"
//             },
//             {
//                 id: "3",
//                 name: "Video 3"
//             },
//         ]
//     },
//     {
//         id: "3",
//         name: "Module 3",
//         video: [
//             {
//                 id: "1",
//                 name: 'Video 1'
//             },
//             {
//                 id: "2",
//                 name: "Video 2"
//             },
//             {
//                 id: "3",
//                 name: "Video 3"
//             },
//         ]
//     },
//     {
//         id: "4",
//         name: "Module 4",
//         video: [
//             {
//                 id: "1",
//                 name: 'Video 1'
//             },
//             {
//                 id: "2",
//                 name: "Video 2"
//             },
//             {
//                 id: "3",
//                 name: "Video 3"
//             },
//         ]
//     },
//     {
//         id: "5",
//         name: "Module 5",
//         video: [
//             {
//                 id: "1",
//                 name: 'Video 1'
//             },
//             {
//                 id: "2",
//                 name: "Video 2"
//             },
//             {
//                 id: "3",
//                 name: "Video 3"
//             },
//         ]
//     },
// ]

// const certificateBackground = {
//     certificateBg: {
//         backgroundImage: `url(${certificateBg.src})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         height: '100%',
//         width: '100%',
//     }
// }

const index = () => {
 return (
  <>
   <CourseOverview />
   {/* <Box sx={{ ...Styles.detailBackground, display: 'flex', alignItems: 'center' }}>
                <Container maxWidth='xl'>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} xl={7} sx={{ display: 'flex', alignItems: 'center' }}>
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
                                        <Grid item xs={12} xl={6}>
                                            <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6} xl={6}>
                                                        <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}><Image src={certificateIcon} /></Item>
                                                    </Grid>
                                                    <Grid item xs={6} xl={6}>
                                                        <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}><span sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px' }}>You will get</span> <br /> <span sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px' }}>Certificate</span></Item>
                                                    </Grid>
                                                </Grid>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} xl={6}>
                                            <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6} xl={6}>
                                                        <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}><Image src={documentIcon} /></Item>
                                                    </Grid>
                                                    <Grid item xs={6} xl={6}>
                                                        <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                                            <span sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px' }}>You will get</span> <br /> <span sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px' }}>Certificate</span>
                                                        </Item>
                                                    </Grid>
                                                </Grid>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} xl={6}>
                                            <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6} xl={6}>
                                                        <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}><Image src={clockIcon} /></Item>
                                                    </Grid>
                                                    <Grid item xs={6} xl={6}>
                                                        <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}><span sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px' }}>You will get</span> <br /> <span sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px' }}>Certificate</span></Item>
                                                    </Grid>
                                                </Grid>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} xl={6}>
                                            <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6} xl={6}>
                                                        <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}><Image src={supportIcon} /></Item>
                                                    </Grid>
                                                    <Grid item xs={6} xl={6}>
                                                        <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}><span sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px' }}>You will get</span> <br /> <span sx={{ fontStyle: 'normal', fontWeight: '400', fontSize: '18px' }}>Certificate</span></Item>
                                                    </Grid>
                                                </Grid>
                                            </Item>
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Grid>
                            <Grid item xs={12} xl={5}>
                                <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                    <Image src={detailImg} className={styles.detailImage} />
                                    <Grid container spacing={2} sx={{ marginTop: { xl: '80px', xs: '0px' } }}>
                                        <Grid item xs={2}>
                                            <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                                <del>$100.00</del> <br /> <span>75% off</span>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={10}>
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
            <Box sx={{ width: '100%', height: { xl: '1400px', xs: '2200px' } }}>
                <Container maxWidth='xl'>
                    <Box sx={{ marginTop: '45px' }}>
                        <ul style={Style.ul}>
                            <li style={Style.li}>
                                <Link href="#" className='course-index-link' to="#overview"
                                >
                                    Overview
                                </Link>
                            </li>
                            <li style={Style.li}>
                                <Link href="#" className='course-index-link' to="#curriculam"
                                >
                                    Curriculam
                                </Link>
                            </li>
                            <li style={Style.li}>
                                <Link href="#" className='course-index-link' to="#certificate"
                                >
                                    Assesment & Certification
                                </Link>
                            </li>
                            <li style={Style.li}>
                                <Link href="#" className='course-index-link' to="#reviews"
                                >
                                    Reviews
                                </Link></li>
                            <li style={Style.li}>
                                <Link href="#" className='course-index-link' to="#faqs"
                                >
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </Box>
                    <Box sx={{ marginTop: '73px' }}>
                        <TagLine>Course Overview</TagLine>
                        <Typography sx={{ fontSize: '18px', fontWeight: '500', fontStyle: 'normal', lineHeight: '32px' }}>By the end of the course, learners will be able to: <br />
                            This infection control training course is designed to provide those who work in a healthcare or social care setting with the skills and knowledge to stop of the spread of bacteria and risk of infection in the workplace. <br />
                            Treating a casualty with First Aid is a hard but rewarding experience. Being able to help a child in distress or pain is an especially admirable talent and one that all parents or child-minders should ideally know. By the end of the course, you’ll know how to interact with a young casualty, how to keep them calm, and when to call an emergency. It should prove to hold invaluable information for keeping children and babies safe from illness, and potentially life-threatening conditions.<br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At elit, gravida vitae ac elementum tellus. Justo quam vestibulum aenean pellentesque posuere eu. Euismod mattis mi dictum id. Pellentesque arcu sagittis, id et vitae convallis. Vitae quam et, urna quis nunc, enim leo sit phasellus. Lectus non id non pharetra, sed aliquet bibendum eleifend sagittis. Ac et volutpat facilisis scelerisque purus etiam interdum. Est amet, iaculis sem in mauris netus rutrum. Morbi vitae quis quis eu ut vel at sodales. Eros, purus velit ut vel vitae sit. At interdum sagittis, viverra vitae amet, justo arcu dolor, tortor.</Typography>
                    </Box>
                    <Box sx={{ marginTop: '99px' }}>
                        <TagLine>Course Curriculam</TagLine>
                        <Grid container spacing={2}>
                            <Grid item xs={12} xl={8}>
                                <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}>
                                    <Accordion>
                                        <AccordionSummary
                                            // expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center' }}><HiPlusCircle style={{ color: '#ED3B45', marginRight: '10px', width: '32px', height: '65px' }} />  Module 1: Introduction to Food Safety and the Law </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: { xl: '420px', xs: '0px' } }}><AiOutlineClockCircle style={{ fontSize: '20px' }} />
                                                        35.00 min</Typography>
                                                </Box>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            // expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center' }}><HiPlusCircle style={{ color: '#ED3B45', marginRight: '10px', width: '32px', height: '65px' }} />  Module 1: Introduction to Food Safety and the Law </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: { xl: '420px', xs: '0px' } }}><AiOutlineClockCircle style={{ fontSize: '20px' }} />
                                                        35.00 min</Typography>
                                                </Box>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            // expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center' }}><HiPlusCircle style={{ color: '#ED3B45', marginRight: '10px', width: '32px', height: '65px' }} />  Module 1: Introduction to Food Safety and the Law </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: { xl: '420px', xs: '0px' } }}><AiOutlineClockCircle style={{ fontSize: '20px' }} />
                                                        35.00 min</Typography>
                                                </Box>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            // expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center' }}><HiPlusCircle style={{ color: '#ED3B45', marginRight: '10px', width: '32px', height: '65px' }} />  Module 1: Introduction to Food Safety and the Law </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: { xl: '420px', xs: '0px' } }}><AiOutlineClockCircle style={{ fontSize: '20px' }} />
                                                        35.00 min</Typography>
                                                </Box>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            // expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center' }}><HiPlusCircle style={{ color: '#ED3B45', marginRight: '10px', width: '32px', height: '65px' }} />  Module 1: Introduction to Food Safety and the Law </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: { xl: '420px', xs: '0px' } }}><AiOutlineClockCircle style={{ fontSize: '20px' }} />
                                                        35.00 min</Typography>
                                                </Box>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            // expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center' }}><HiPlusCircle style={{ color: '#ED3B45', marginRight: '10px', width: '32px', height: '65px' }} />  Module 1: Introduction to Food Safety and the Law </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: { xl: '420px', xs: '0px' } }}><AiOutlineClockCircle style={{ fontSize: '20px' }} />
                                                        35.00 min</Typography>
                                                </Box>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            // expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center' }}><HiPlusCircle style={{ color: '#ED3B45', marginRight: '10px', width: '32px', height: '65px' }} />  Module 1: Introduction to Food Safety and the Law </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ display: 'flex', alignItems: 'center', marginLeft: { xl: '420px', xs: '0px' } }}><AiOutlineClockCircle style={{ fontSize: '20px' }} />
                                                        35.00 min</Typography>
                                                </Box>
                                            </Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion></Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ ...certificateBackground.certificateBg, display: 'flex', alignItems: 'center' }}>
                <Container maxWidth='xl'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} xl={6}>
                            <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0', marginTop: '30px' }}>
                                <TagLine>Assesment & Certification</TagLine>
                                <Typography sx={{ margin: '45px 0px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At elit, gravida vitae ac elementum tellus. Justo quam vestibulum aenean pellentesque posuere eu. Euismod mattis mi dictum id. Pellentesque arcu sagittis, id et vitae convallis. Vitae quam et, urna quis nunc, enim leo sit phasellus. Lectus non id non pharetra, sed aliquet bibendum eleifend sagittis. Ac et volutpat facilisis scelerisque purus etiam interdum. Est amet, iaculis sem in mauris netus rutrum. Morbi vitae quis quis eu ut vel at sodales. Eros, purus velit ut vel vitae sit. At interdum sagittis, viverra vitae amet, justo arcu dolor, tortor.</Typography>
                                <PrimaryButton>BUY NOW</PrimaryButton>
                            </Item>
                        </Grid>
                        <Grid item xs={12} xl={6}>
                            <Item sx={{ backgroundColor: 'transparent', textAlign: 'left', boxShadow: '0' }}><Image src={certificate} /></Item>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ height: '800px' }}>
                <Container maxWidth='xl'>
                    <Box sx={{ display: 'flex', position: 'relative', alignItems: 'center', marginTop: '40px' }} >
                        <TagLine>Reviews of This Course</TagLine> <Box sx={{ marginLeft: '30px' }}><Image src={reviewDesign} />
                            <Typography sx={{ position: 'absolute', left: '660px', top: '22px' }}><FaStar style={{
                                color: '#FFB300'
                            }} /> 4.8 User Rating</Typography></Box>
                    </Box>
                </Container>
            </Box> */}
  </>
 );
};

export default index;
