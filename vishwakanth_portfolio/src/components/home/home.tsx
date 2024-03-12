"use client";

import React from "react";
import "./home.scss";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { customMuiTheme } from "@/src/shared/customtheme";
import { appColors } from "@/src/shared/appColors";
import { decriptionContent } from "@/src/shared/contents/description";
import TitleButton from "@/src/shared/components/title/titleButton";
import {
  EmailOutlined,
  MailOutlineRounded,
  MailRounded,
  PermPhoneMsgOutlined,
} from "@mui/icons-material";
import {
  academicQualification,
  contactInfo,
  experience,
  projects,
} from "@/src/shared/contents/homeContent";
import Image from "next/image";
import ExpIcon from "../../../public/exp icon.svg";
import ProjectIcon from "../../../public/shield icon.svg";
import SchoolIcon from "../../../public/school icon.svg";
import CollegeIcon from "../../../public/university icon.svg";
import CustomStack from "@/src/shared/components/customStack/customStack";
import CustomBox from "@/src/shared/components/customBox/customBox";

const HomeComponent = () => {
  const width = useMediaQuery("(min-width: 900px)");

  return (
    <ThemeProvider theme={customMuiTheme}>
      <div className="mainHome">
        <Box p={width? 5 : 2}>
          <Grid container bgcolor={appColors.light} columnSpacing={5}>
            {/* Main left grid view */}
            <Grid item md={6} xs={12}>
              <Box bgcolor={appColors.container_bg} borderRadius={15}>
                <Typography color={"black"} p={5} lineHeight={1.938}>
                  {decriptionContent.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </Typography>
              </Box>
            </Grid>

            {/* Main right grid view */}
            <Grid item md={6} xs={12} mt={width ? 0 : 4}>
              {/* Right view container */}
              <Grid container rowSpacing={5}>
                {/* Contact me */}
                <Grid item xs={12}>
                  <Box
                    bgcolor={appColors.container_bg}
                    borderRadius={15}
                    p={3}
                    color={appColors.dark}
                  >
                    <TitleButton title={"Contact me"} />

                    {/* Email & phno */}
                    <CustomStack>
                      <MailOutlineRounded />
                      <Typography variant={width ? "h6" : "body1"}>{contactInfo.email}</Typography>
                    </CustomStack>

                    <CustomStack>
                      <PermPhoneMsgOutlined />
                      <Typography variant={width ? "h6" : "body1"}>{contactInfo.phno}</Typography>
                    </CustomStack>
                  </Box>
                </Grid>

                {/* Experience */}
                <Grid item xs={12}>
                  <CustomBox>
                    <TitleButton title={"Experience"} />

                    {/* List of experience */}
                    {experience.map((expreinceItem, index) => {
                      return (
                        <CustomStack key={index}>
                          <Image
                            src={ExpIcon}
                            alt="Experience icon"
                            height={width ? 50 : 40}
                            width={width ? 50 : 40}
                          />

                          {/* Experience text */}
                          <Typography color={appColors.dark}>
                            <strong>{expreinceItem.role} </strong>
                            at{" "}
                            <span style={{ color: appColors.secondary }}>
                              {expreinceItem.location}{" "}
                            </span>
                            from{" "}
                            <span style={{ color: appColors.secondary }}>
                              {expreinceItem.startDate}{" "}
                            </span>
                            to{" "}
                            <span style={{ color: appColors.secondary }}>
                              {expreinceItem.endDate}{" "}
                            </span>
                          </Typography>
                        </CustomStack>
                      );
                    })}
                  </CustomBox>
                </Grid>

                {/* Project */}
                <Grid item xs={12}>
                  <CustomBox>
                    <TitleButton title={"Projects"} />

                    {/* List of projects */}
                    {projects.map((projectItem, index) => {
                      return (
                        <CustomStack key={index}>
                          <Image
                            src={ProjectIcon}
                            alt="Project icon"
                            height={width ? 40 : 30}
                            width={width ? 40 : 30}
                          />

                          {/* Experience text */}
                          <Typography color={appColors.dark}>
                            <strong>{projectItem.projectName} </strong>
                            at{" "}
                            <span style={{ color: appColors.secondary }}>
                              {projectItem.company}{" "}
                            </span>
                            from{" "}
                            <span style={{ color: appColors.secondary }}>
                              {projectItem.startDate}{" "}
                            </span>
                            to{" "}
                            <span style={{ color: appColors.secondary }}>
                              {projectItem.endDate}{" "}
                            </span>
                          </Typography>
                        </CustomStack>
                      );
                    })}
                  </CustomBox>
                </Grid>

                {/* Academic qualification */}
                <Grid item xs={12}>
                  <CustomBox>
                    <TitleButton title={"Academic qualification"} />

                    {/* List of academic years */}
                    {academicQualification.map((academyItem, index) => {
                      return (
                        <CustomStack key={index}>
                          <Image
                            src={
                              academyItem.type == "School"
                                ? SchoolIcon
                                : CollegeIcon
                            }
                            alt="Academy icon"
                            height={50}
                            width={50}
                          />

                          {/* Experience text */}
                          <Stack direction={"column"}>
                            <Typography color={appColors.dark}>
                              <strong>{academyItem.qualification} </strong>
                            </Typography>
                            <Typography color={appColors.brown}>
                              <strong>{academyItem.percentage} </strong>
                            </Typography>
                            <Typography color={appColors.secondary}>
                              {/* {academyItem.type}{" : "} */}
                              {academyItem.studied_at}
                            </Typography>
                          </Stack>
                        </CustomStack>
                      );
                    })}
                  </CustomBox>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default HomeComponent;
