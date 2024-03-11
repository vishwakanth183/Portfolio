import React from 'react';
import { Stack } from '@mui/material';

interface CustomStackProps {
    children: React.ReactNode;
    elementStart?: boolean; // Optional prop with default value
  }

const CustomStack : React.FC<CustomStackProps> = ({ children, elementStart = false }) => {
    return <Stack direction={"row"} spacing={2} alignItems={elementStart ? "flex-start" : "center"} mt={3} ml={2} mb={3}>
        {children}
    </Stack>
}

export default CustomStack;