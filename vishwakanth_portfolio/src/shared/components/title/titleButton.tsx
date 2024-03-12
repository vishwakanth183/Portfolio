import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { appColors } from "../../appColors";

const TitleButton = ({ title }: { title: String }) => {
  return (
    // <Button
    //   sx={{
    //     bgcolor: appColors.title_bg,
    //     pl: 5,
    //     pr: 5,
    //     pt: 2,
    //     pb: 2,
    //     borderRadius: 10,
    //     color: appColors.dark,
    //   }}
    // >
    //   {title}
    // </Button>
    <Box
      pl={5}
      pr={5}
      pt={2}
      pb={2}
      bgcolor={appColors.title_bg}
      sx={{
        display: "inline-block",
        maxWidth: "fit-content",
        borderRadius: 10,
      }}
    >
      <Typography color={appColors.dark}>{title}</Typography>
    </Box>
  );
};

export default TitleButton;
