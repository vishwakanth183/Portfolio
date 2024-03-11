"use client"

import React from 'react';
import "./achievement.scss"
import { ThemeProvider, Typography } from '@mui/material';
import { customMuiTheme } from '@/src/shared/customtheme';

const AchievementComponent = () => {
    return (
        <ThemeProvider theme={customMuiTheme}>
            <div className='mainHome'>
                <Typography color={"black"}>Achievement page</Typography>
            </div>
        </ThemeProvider>
    );
}

export default AchievementComponent;