"use client"

import React, { ReactElement, useState } from 'react';
import "./header.scss"
import { Avatar, Button, ButtonGroup, Divider, Stack, ThemeProvider, Typography, useMediaQuery } from '@mui/material';
import { customMuiTheme } from '../customtheme';
import { appColors } from '../appColors';
import profileImage from '../../../public/profile_pic.jpg';
import Link from 'next/link';
import { FileCopyOutlined, InsertDriveFile, LinkedIn } from '@mui/icons-material';


const Header = () => {

    // State to handle active page
    const [activePage, setActivePage] = useState("About me");

    // State to handle media query
    const width = useMediaQuery('(min-width: 900px)');

    const CustomizedLinkButton = ({ name, path }: { name: string, path: string }) => {
        return <Link href={path} onClick={() => setActivePage(name)}>
            <Button variant='contained'
                sx={{
                    backgroundColor: activePage == name ? appColors.active_button_bg : appColors.inactive_button_bg,
                    borderRadius: 25,
                    color: appColors.dark,
                    '&focusVisible': { backgroundColor: 'red' }
                }}
            >{name}</Button>
        </Link>
    }

    const CustomActionButton = ({ title, Icon, bgColor }: { title: string, Icon: React.FC, bgColor: string }) => {
        return <Stack display={"flex"} direction={"row"} spacing={1} bgcolor={bgColor} alignItems={"center"} justifyContent={"center"}
            pl={4}
            pr={4}
            pt={2}
            pb={2}
            borderRadius={25}
            width={width ? "auto" : 300}
        >
            <Icon />
            <Typography>{title}</Typography>
        </Stack>
    }


    return (
        <ThemeProvider theme={customMuiTheme}>
            <div className='headerContainer'>

                {/* Navigation section */}
                <Stack
                    direction={"row"}
                    spacing={2}
                    justifyContent={"flex-end"}
                >
                    <CustomizedLinkButton name={width ? "About me" : "About"} path='/home' />
                    <CustomizedLinkButton name={width ? "Skills and Certifications" : "Skills"} path='/skills' />
                    <CustomizedLinkButton name={"Achievements"} path='/achievements' />
                </Stack>

                {/* Title View */}
                <Stack direction={width ? 'row' : 'column'} display={"flex"} alignItems={"center"} mt={5} mb={3}>

                    {/* Avatar section */}
                    <Avatar className='avatarStyle' alt="Profile Picture" src={profileImage.src} sx={{ height: 200, width: 200, mt: width ? 0 : 5, mb: width ? 0 : 5 }} style={{ objectFit: 'contain' }} />

                    {/* Job title section */}
                    <Stack pl={5}>
                        <Typography fontSize={32} color={appColors.light_opacity_text}>Welcome to my world!</Typography>
                        <Typography fontSize={66} color={appColors.light}>
                            Hi, I'm
                            <span style={{ color: appColors.highlight_text }}> Vishwakanth</span>
                        </Typography>
                        <Typography fontSize={66} color={appColors.light}>
                            Senior Full Stack
                            <span style={{ color: appColors.active_button_bg }}> Developer & Designer</span>
                        </Typography>
                    </Stack>

                </Stack>


                {/* Download & Connect Section */}
                <Stack direction={width ? 'row' : 'column'} display={"flex"} justifyContent={width ? "flex-end" : "center"} alignItems={"center"} spacing={2}>

                    {/* Resume download section */}
                    <Link href="/Vishwakanth Resume 2024.pdf" download="Vishwakanth Resume 2024.pdf">
                    <CustomActionButton Icon={() => <FileCopyOutlined />} title='Download My Resume' bgColor={appColors.download_bg} />
                    </Link>

                    {/* Connect to linkedin section */}
                    <Link href={"https://www.linkedin.com/in/vishwakanth-s-7a17342b0"}>
                        <CustomActionButton Icon={() => <LinkedIn />} title='Connect with me' bgColor={appColors.connect_bg} />
                    </Link>

                </Stack>

            </div>
        </ThemeProvider>
    );
}

export default Header;