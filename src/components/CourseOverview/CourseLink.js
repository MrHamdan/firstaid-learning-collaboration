import { Box, Container } from '@mui/material';
import Link from 'next/link';


const Style = {
    ul: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        padding: '0 5px'
    },
    li: {
        fontWeight: 500
    }
}


const CourseLink = () => {
    return (
        <>
            <Box sx={{ marginTop: '45px' }}>
                <Container maxWidth='xl'>
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
                </Container>
            </Box>
        </>
    );
}
export default CourseLink;