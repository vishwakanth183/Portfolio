"use client";

import React from "react";
import "./skills.scss";
import { customMuiTheme } from "@/src/shared/customtheme";
import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Button,
  Divider,
  Grid,
  LinearProgress,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CustomBox from "@/src/shared/components/customBox/customBox";
import TitleButton from "@/src/shared/components/title/titleButton";
import CustomStack from "@/src/shared/components/customStack/customStack";
import SkillsIcon from "../../../public/star icon.svg";
import BadgeIcon from "../../../public/badge.svg";
import Image from "next/image";
import { skillsContent } from "@/src/shared/contents/skillsContent";
import { appColors } from "@/src/shared/appColors";
import { certificates } from "@/src/shared/contents/certiticationContent";
import { OpenInNewRounded } from "@mui/icons-material";
import Link from "next/link";

const SkillsComponent = () => {
  // State to handle media query
  const width = useMediaQuery("(min-width: 900px)");

  return (
    <ThemeProvider theme={customMuiTheme}>
      <div className="mainSkills">
        <Box p={5}>
          {/* main grid */}
          <Grid container>
            {/* License & Certifications grid */}
            <Grid item xs={12} md={6}>
              <CustomBox
                customStyle={{
                  marginTop: 2,
                  marginBottom: 2,
                  marginLeft: 5,
                  marginRight: 5,
                }}
              >
                <TitleButton title={"License & Certifications"} />

                {/* List of certifications */}
                {certificates.map((certificateItem, index) => {
                  return (
                    <Box key={index}>
                      <CustomStack elementStart>
                        <Image
                          src={BadgeIcon}
                          alt="Badge icon"
                          height={45}
                          width={45}
                        />

                        <Stack>
                          <Typography variant="h6" color={appColors.dark}>
                            {/* <strong> */}
                            {certificateItem.certificateName}
                            {/* </strong> */}
                          </Typography>

                          <Link href={certificateItem.verfication_url}>
                            <Button
                              variant="text"
                              sx={{
                                p: 1,
                                pl: 2,
                                pr: 2,
                                borderRadius: 10,
                                color: "white",
                                textTransform: "capitalize",
                              }}
                              className="verifyButton"
                            >
                              <Stack
                                display={"flex"}
                                direction={"row"}
                                alignItems={"center"}
                              >
                                <Typography variant="body2">Verify</Typography>
                                <OpenInNewRounded
                                  fontSize={"inherit"}
                                  sx={{ ml: 1 }}
                                />
                              </Stack>
                            </Button>
                          </Link>
                        </Stack>
                      </CustomStack>
                      <Divider sx={{ mt: 2, mb: 2, width: "100%" }} />
                    </Box>
                  );
                })}
              </CustomBox>
            </Grid>

            {/* Skills grid */}
            <Grid item xs={12} md={6}>
              <CustomBox
                customStyle={{
                  marginTop: 2,
                  marginBottom: 2,
                  marginLeft: 5,
                  marginRight: 5,
                  paddingRight: 7,
                }}
              >
                <TitleButton title={"Skills"} />

                {/* List of skills */}
                {skillsContent.map((skillItem, index) => {
                  return (
                    <CustomStack elementStart key={index}>
                      <Image
                        src={SkillsIcon}
                        alt="Skills icon"
                        height={60}
                        width={60}
                      />
                      <Stack display={"flex"} width={"100%"}>
                        <Typography color={appColors.dark}>
                          {skillItem.skillname}
                        </Typography>
                        <Box
                          sx={{ width: "100%", color: appColors.slider_color }}
                        >
                          <LinearProgress
                            sx={{ borderRadius: 25, height: 13 }}
                            variant="determinate"
                            color="inherit"
                            value={skillItem.percentage}
                          />
                        </Box>
                      </Stack>
                    </CustomStack>
                  );
                })}
              </CustomBox>
            </Grid>
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default SkillsComponent;
