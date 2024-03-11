"use client"

import React from 'react';
import "./achievement.scss"
import { Grid, ThemeProvider, Typography } from '@mui/material';
import { customMuiTheme } from '@/src/shared/customtheme';
import { totalAchievements } from '@/src/shared/contents/achievement';
import CustomStack from '@/src/shared/components/customStack/customStack';
import Image from 'next/image';
import AchievementIcon from "../../../public/achievement icon.svg"
import TitleButton from '@/src/shared/components/title/titleButton';
import CustomBox from '@/src/shared/components/customBox/customBox';
import { appColors } from '@/src/shared/appColors';


const AchievementComponent = () => {
    return (
        <ThemeProvider theme={customMuiTheme}>
            <div className='mainHome'>
                <Grid container rowSpacing={0} columnSpacing={5} p={5} pt={0}>

                    {
                        totalAchievements.map((achievemtItem, mainIndex) => {
                            return <Grid item xs={12} md={6} mt={5}>
                                <CustomBox>
                                    <TitleButton title={achievemtItem.type} key={mainIndex} />
                                    {
                                        achievemtItem.achievements.map((myAchievement, subIndex) => {
                                            return <CustomStack elementStart key={subIndex}>
                                                <Image
                                                    src={AchievementIcon}
                                                    alt='Achievement icon'
                                                    height={45}
                                                    width={45}
                                                />
                                                <Typography color={appColors.dark}>
                                                    {myAchievement.achievement}
                                                </Typography>
                                            </CustomStack>
                                        })
                                    }
                                </CustomBox>
                            </Grid>
                        })
                    }

                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default AchievementComponent;