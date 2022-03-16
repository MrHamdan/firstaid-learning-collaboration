import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import viewCourseBg from '../../Images/viewCourseBackground.png';
import { Container, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const viewCourseBackground = {
    viewCourseBg: {
        backgroundImage: `url(${viewCourseBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '288px',
        width: '100%',
    }
}

const ViewCourse = () => {
    return (
        <>
            <Box sx={{ ...viewCourseBackground.viewCourseBg, display: 'flex', alignItems: 'center' }}>
                <Container maxWidth='xl'>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Item>
                                    <Typography>
                                        Be Confident! Have an wonder journey with our course
                                    </Typography>
                                    <Typography>
                                        The sky was cloudless and of a deep dark blue spectacle before us
                                    </Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item>xs=4</Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
export default ViewCourse;