import { Box } from '@mui/material';
import detailBg from '../../Images/detailbackground.png';
const Styles = {
    detailBackground:{
        backgroundImage: `url(${detailBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '654.89px',
        width: '100vw',
    }
}
const CourseOverview = () => {
    return (
        <>
        <Box sx={Styles.detailBackground}>
            <Box>

            </Box>
            <Box>
                
            </Box>
        </Box>
        </>
    )
}

export default CourseOverview;