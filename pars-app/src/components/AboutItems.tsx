import React from "react";
import Box from "@mui/material/Box";
import Grid from "@material-ui/core/Grid";
import { Title, Wrapper, TextBox } from "./Style";

interface IProps {
  title: string;
  description: string;
  icon: any;
  even?: any;
}

export const AboutItems: React.FC<IProps> = ({
  title,
  description,
  icon,
  even,
}) => {
  return (
    <Wrapper
      sx={{
        display: "flex",
        mb: "3rem",
      }}
      flexDirection={even ? "row-reverse" : "row"}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "4.125rem",
          height: "4.125rem",
          borderRadius: "50%",
          bgcolor: "#FFDE59",
          p: "0.5rem",
        }}
      >
        {icon}
      </Box>
      <TextBox
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        mr={even ? "0" : "1.875rem"}
        ml={even ? "1.875rem" : "0"}
      >
        <Title
          textAlign={even ? "left" : "right"}
          mb="1rem"
          fontSize="1.125rem"
          fontWeight="600"
        >
          {title}
        </Title>
        <Box fontSize="0.875rem">{description}</Box>
      </TextBox>
    </Wrapper>
  );
};
