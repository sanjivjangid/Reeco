import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DialogBox = ({ open, handleClose, handleNo, handleYes, children}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Missing product
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {`Is '${children}...' urgent?`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleNo} variant="text">No</Button>
        <Button onClick={handleYes} variant="text" autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
