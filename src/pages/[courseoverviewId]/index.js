import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import detailBg from '../../Images/detailbackground.png';
import detailImg from '../../Images/detailimage.png';
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
            <Box sx={{display: 'flex',alignItems: 'center',justifyContent: 'space-evenly'}}>
            <Box>
                <Typography sx={{fontStyle:'normal', fontWeight:'500',fontSize:'36px',lineHeight:'145%', color:'white'}}>
                Level 2 Food Hygiene and Safety for Catering
                </Typography>
            </Box>
            <Box sx={{position: 'relative'}}>
                <Image src={detailImg} />
            </Box>
            </Box>
        </Box>
        </>
    )
}

export default CourseOverview;