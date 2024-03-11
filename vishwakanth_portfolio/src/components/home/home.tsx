"use client"

import React from 'react';
import "./home.scss"
import { ThemeProvider, Typography } from '@mui/material';
import { customMuiTheme } from '@/src/shared/customtheme';


const  HomeComponent = () =>{
    return (
        <ThemeProvider theme={customMuiTheme}>
            <div className='mainHome'>
            <Typography color={"black"}>Home page</Typography>
        </div>
        </ThemeProvider>
    );
}

export default HomeComponent;