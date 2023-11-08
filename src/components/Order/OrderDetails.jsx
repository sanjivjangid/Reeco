import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import IcecreamIcon from "@mui/icons-material/Icecream";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LiquorIcon from "@mui/icons-material/Liquor";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const StyledSuplierName = styled(Typography)(() => ({
  fontWeight: 600,
}));

const StyledBoxTitle = styled(Typography)(() => ({
  fontWeight: 600,
  color: "#444",
}));

const StyledBox = styled(Box)`
  padding: 1rem;
  + .MuiBox-root {
    border-left: 1px solid #ddd;
  }
`;

const CategoryIconsBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: 'wrap',
}));

const OrderDetails = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ p: 4 }}>
        <Grid
          container
          item
          xs={12}
          justifyContent="space-between"
          sx={{ border: "1px solid #ddd", borderRadius: "8px", pt: 2, pb: 2 }}
        >
          <StyledBox>
            <StyledBoxTitle variant="subtitle2">Supplier</StyledBoxTitle>
            <StyledSuplierName variant="body1">
              East coast fruits & vegetables
            </StyledSuplierName>
          </StyledBox>
          <StyledBox>
            <StyledBoxTitle variant="subtitle2">Shipping Date</StyledBoxTitle>
            <StyledSuplierName variant="body1">Thu, Oct 10</StyledSuplierName>
          </StyledBox>
          <StyledBox>
            <StyledBoxTitle variant="subtitle2">Total</StyledBoxTitle>
            <StyledSuplierName variant="body1">$ 12,234.00</StyledSuplierName>
          </StyledBox>
          <StyledBox sx={{ maxWidth: '170px' }}>
            <StyledBoxTitle variant="subtitle2">Category</StyledBoxTitle>
            <CategoryIconsBox>
              <FastfoodIcon sx={{ m: 1, color: '#888' }} />
              <IcecreamIcon sx={{ m: 1, color: '#888' }} />
              <LunchDiningIcon sx={{ m: 1, color: '#888' }} />
              <LiquorIcon sx={{ m: 1, color: '#888' }} />
              <LocalDiningIcon sx={{ m: 1, color: '#888' }} />

              <IcecreamIcon sx={{ m: 1, color: '#888' }} />

              <LiquorIcon sx={{ m: 1, color: '#888' }} />
              <LocalDiningIcon sx={{ m: 1, color: '#888' }} />
            </CategoryIconsBox>
          </StyledBox>
          <StyledBox>
            <StyledBoxTitle variant="subtitle2">Department</StyledBoxTitle>
            <StyledSuplierName variant="body1">300-300-4443</StyledSuplierName>
          </StyledBox>
          <StyledBox>
            <StyledBoxTitle variant="subtitle2">Status</StyledBoxTitle>
            <StyledSuplierName variant="body1">
              Awaiting your approval
            </StyledSuplierName>
          </StyledBox>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrderDetails;
