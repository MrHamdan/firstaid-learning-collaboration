import { Button } from '@mui/material';
import React from 'react';

const Styles = {
    loginButton: {
        fontWeight: 'bold',
        borderRadius: '11.21px',
        backgroundColor: '#EA2E10',
        width: {
            xs: '120px',
            md: '152.43px'
        },
        height: '67.25px',
        '&:hover': {
            backgroundColor: 'red'
        }
    }
}
const PrimaryButton = ({ children, onClick }) => {
    return (
        <div>
            <Button onClick={onClick} variant="contained"
                sx={Styles.loginButton}>
                {children}
            </Button>
        </div>
    );
};

export default PrimaryButton;
