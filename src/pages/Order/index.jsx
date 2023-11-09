import React, { useCallback, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import OrderHeader from "../../components/Order/OrderHeader";
import OrderDetails from "../../components/Order/OrderDetails";
import OrderGrid from "../../components/Order/OrderGrid";

import {
  loadData,
  updateStatus as updateStatusAction,
} from "./slices/productsSlice";
import { productsData } from "../../data/data";
import { find } from "lodash";
import DialogBox from "../../components/common/DialogBox";

const Order = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [currentSelected, setCurrentSelected] = useState('');

  const { products } = useSelector((state) => state.products);

  const getData = useCallback(() => {
    dispatch(loadData(productsData));
  }, [dispatch]);

  const handleNo = () => {
    dispatch(updateStatusAction({ id: currentSelected.id, status: 'DECLINED' }));
    setOpen(false);
  };
  const handleYes = () => {
    dispatch(updateStatusAction({ id: currentSelected.id, status: 'DECLINED-URGENT' }));
    setOpen(false);
  };

  const updateStatus = (id, status) => {
    if(status === 'DECLINED') {
      const findItem = find(products, { id });
      if (findItem) {
        setCurrentSelected(findItem);
        setOpen(true);
      }
      
    } else {
      dispatch(updateStatusAction({ id, status }));
    }
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Grid container>
      <Grid item xs={12} sx={{ boxShadow: "0px 15px 10px 0px #c5c5c5" }}>
        <OrderHeader />
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" sx={{ mt: 4 }}>
          <Grid item xs={10}>
            <OrderDetails />
          </Grid>
          <Grid item xs={10}>
            <OrderGrid products={products} updateStatus={updateStatus} />
          </Grid>
        </Grid>
      </Grid>
      <DialogBox open={open} handleClose={() => setOpen(false)} handleNo={handleNo} handleYes={handleYes}>
        {currentSelected && currentSelected.name}
      </DialogBox>
    </Grid>
  );
};

export default Order;
