import React from "react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  return (
    <OutlinedInput
      id="search-product"
      aria-describedby="search-product"
      endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
      sx={{ borderRadius: '2rem' }}
      fullWidth
      size="small"
    />
  );
};

export default SearchBox;
