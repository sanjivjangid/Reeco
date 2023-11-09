import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import OutlinedButton from "../common/OutlinedButton";

const StyledOrderName = styled(Typography)(() => ({
  fontWeight: 600,
  display: 'inline'
}));

const StyledOrderBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

const StyledApproveButton = styled(Button)(() => ({
  color: '#FFFFFF',
  background: '#024902',
  borderRadius: '2rem',
  fontWeight: 600
}));

const OrderHeader = () => {
  return (
    <StyledOrderBox sx={{ ml: 8, mt:2, mb: 2, mr: 8 }}>
      <StyledOrderName variant="h5">Order 23456TRE</StyledOrderName>
      <Box>
        <OutlinedButton>Back</OutlinedButton>
        <StyledApproveButton variant="contained">Approve Order</StyledApproveButton>
      </Box>
    </StyledOrderBox>
  );
};

export default OrderHeader;
