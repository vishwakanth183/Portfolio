"use client";

import React from "react";
import "./achievement.scss";
import { Box, Grid, ThemeProvider, Typography, useMediaQuery } from "@mui/material";
import { customMuiTheme } from "@/src/shared/customtheme";
import { totalAchievements } from "@/src/shared/contents/achievement";
import CustomStack from "@/src/shared/components/customStack/customStack";
import Image from "next/image";
import AchievementIcon from "../../../public/achievement icon.svg";
import TitleButton from "@/src/shared/components/title/titleButton";
import CustomBox from "@/src/shared/components/customBox/customBox";
import { appColors } from "@/src/shared/appColors";

const AchievementComponent = () => {
  // State to handle media query
  const width = useMediaQuery("(min-width: 900px)");

  return (
    <ThemeProvider theme={customMuiTheme}>
      <div className="mainAchievement">
        <Box p={width ? 5 : 2}>
          <Grid container columnSpacing={8}>
            {totalAchievements.map((achievemtItem, mainIndex) => {
              return (
                <Grid item xs={12} md={6} mt={width ? 5 : 3} key={mainIndex}>
                  <CustomBox>
                    <TitleButton title={achievemtItem.type} />
                    {achievemtItem.achievements.map(
                      (myAchievement: any, subIndex) => {
                        return (
                          <CustomStack elementStart key={subIndex}>
                            <Image
                              src={AchievementIcon}
                              alt="Achievement icon"
                              height={45}
                              width={45}
                            />
                            {myAchievement?.awaredBy ? (
                              <Typography
                                color={appColors.dark}
                                sx={{ pt: 0.5 }}
                              >
                                <span>Honoured as </span>{" "}
                                <strong style={{ color: appColors.primary }}>
                                  {myAchievement?.achievement}
                                </strong>{" "}
                                {myAchievement?.for && (
                                  <span>for {myAchievement?.for} </span>
                                )}
                                by{" "}
                                <strong style={{ color: appColors.secondary }}>
                                  {myAchievement?.awaredBy}
                                </strong>{" "}
                                on{" "}
                                <strong style={{ color: appColors.brown }}>
                                  {myAchievement?.year}
                                </strong>
                              </Typography>
                            ) : (
                              <Typography
                                color={appColors.dark}
                                sx={{ pt: 0.5 }}
                              >
                                {myAchievement.achievement}
                              </Typography>
                            )}
                          </CustomStack>
                        );
                      }
                    )}
                  </CustomBox>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default AchievementComponent;
