import { Box } from '@mui/system';
import React from 'react';

const HeroCircularLayout = ({ children }) => {
    return (
        <Box
            sx={{

                height: {
                    xs: '300px',
                    sm: '350px',
                    lg: '380px',
                    xl: '450px'
                },
                width: {
                    xs: '300px',
                    sm: '350px',
                    lg: '380px',
                    xl: '450px'
                },
                backgroundColor: '#FFE4E0',
                borderRadius: '50%',
                position: 'relative'
            }}
        >
            {children}
        </Box>
    );
};

export default HeroCircularLayout;