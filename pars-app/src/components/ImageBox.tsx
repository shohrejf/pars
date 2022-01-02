import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const ImageBox: React.FC = () => {
  return (
    <Grid container spacing="1.9375rem">
      <Grid item xs={12} sm={4}>
        <Box height="17.8125rem" bgcolor="lightGray"></Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box height="17.8125rem" bgcolor="red"></Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box height="17.8125rem" bgcolor="blue"></Box>
      </Grid>
    </Grid>
  );
};
