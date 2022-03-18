import { Box, Typography, Paper, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import TagLine from 'components/Shared/Tagline';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { HiPlusCircle } from "react-icons/hi"
import { AiOutlineClockCircle } from "react-icons/ai"
import CourseLink from 'components/CourseOverview/CourseLink';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const CourseCurriculam = () => {
    return (
        <>
            <Box sx={{ width: '100%', height: { xl: '1400px', xs: '2200px' } }}>
                <Container maxWidth='xl'>
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
        </>
    );
}

export default CourseCurriculam;