import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";

export const GridWrapper = styled(Grid)`
  @media only screen and (max-width: 700px) {
    padding: 2.5rem 1.5rem;
  }
`;

export const AboutWrapper = styled(Box)`
  background: url("backgroundImage.svg") no-repeat left top;
 
`;


export const Title = styled(Box)`
  @media only screen and (max-width: 1000px) {
    text-align: start;
    margin-top: 0.75rem;
  }
`;

export const Wrapper = styled(Box)`
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextBox = styled(Box)`
  @media only screen and (max-width: 764px) {
    margin: 0;
  }
`;
