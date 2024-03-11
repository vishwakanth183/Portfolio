import { Box } from '@mui/material';
import React from 'react';
import { appColors } from '../../appColors';

interface CustomBoxProps {
    children: React.ReactNode;
    customStyle?: React.CSSProperties; // Optional custom style object
}

const CustomBox: React.FC<CustomBoxProps> = ({ children, customStyle = {} }) => {
    return (
        <Box bgcolor={appColors.container_bg} borderRadius={15} p={3} sx={{...customStyle}}>
            {children}
        </Box>
    );
}

export default CustomBox;