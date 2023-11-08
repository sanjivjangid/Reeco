import React from "react";
import { AppBar, Container, Toolbar, Typography, Box, Button, IconButton, Badge } from "@mui/material";
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const pages = ['Store', 'Orders', 'Analytics'];

const StyledAppBar = styled(AppBar)(() => ({
  background: '#024902'
}));

const StyledToolbar = styled(Toolbar)(() => ({
  // override toolbar styles
}));

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              textDecoration: "none",
              color: "#FFFFFF",
              fontWeight: 700,
              mr: 4,
            }}
          >
            Reeco
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <Badge badgeContent={4} color="success">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Button component="label" variant="text" endIcon={<KeyboardArrowDownIcon />} sx={{ color: '#FFF' }}>
              Hello, User
            </Button>
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
