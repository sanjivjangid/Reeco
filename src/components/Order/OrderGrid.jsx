import React from "react";
import { Grid, IconButton } from "@mui/material";
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';

import SearchBox from "../common/SearchBox";
import OutlinedButton from "../common/OutlinedButton";
import OrderTable from "./OrderTable";

const OrderGrid = ({ products, updateStatus }) => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ m: 4, p: 4, border: '1px solid #ddd', borderRadius: "8px" }}>
        <Grid container>
          <Grid item xs={6}>
            <SearchBox />
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
            <OutlinedButton>Add item</OutlinedButton>
            <IconButton>
              <PrintOutlinedIcon sx={{ color: '#32b332' }} />
            </IconButton>
          </Grid>

          <Grid item xs={12} sx={{ mt: 4 }}>
            <OrderTable products={products} updateStatus={updateStatus} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrderGrid;
