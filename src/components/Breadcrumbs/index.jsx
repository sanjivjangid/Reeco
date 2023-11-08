import React from "react";
import { Stack, Link, Typography, Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Breadcrumbs = () => {
  const breadcrumbs = [
    <Link underline="hover" key="2" color="inherit" href="#">
      Orders
    </Link>,
    <Typography key="3" color="text.primary">
      Order2345TRE
    </Typography>,
  ];
  return (
    <Stack spacing={1} sx={{ ml: 8, mt:2, mb: 2 }}>
      <MuiBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </MuiBreadcrumbs>
    </Stack>
  );
};

export default Breadcrumbs;
