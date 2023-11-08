import React from "react";
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledBackButton = styled(Button)(() => ({
  border: '1px solid #024902',
  borderRadius: '2rem',
  marginRight: '1rem',
  color: '#024902',
  fontWeight: 600
}));

const OutlinedButton = ({ children }) => {
  return <StyledBackButton variant="outlined">{children}</StyledBackButton>;
};

export default OutlinedButton;
