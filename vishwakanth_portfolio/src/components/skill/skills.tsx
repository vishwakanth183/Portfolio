"use client"

import React from 'react';
import "./skills.scss"
import { customMuiTheme } from '@/src/shared/customtheme';
import { ThemeProvider } from '@emotion/react';
import { Typography } from '@mui/material';


const SkillsComponent = () => {
    return (
        <ThemeProvider theme={customMuiTheme}>
            <div className='mainHome'>
                <Typography color={"black"}>Skills page</Typography>
            </div>
        </ThemeProvider>
    );
}

export default SkillsComponent;