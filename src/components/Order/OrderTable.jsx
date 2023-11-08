import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Chip, IconButton } from "@mui/material";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import logo from '../../Avocado-Hass.jpg';

const RenderActions = ({ row, updateStatus }) => {
  return (
    <Box sx={{ m: 1 }}>
      <IconButton onClick={() => updateStatus(row.row.id, 'APPROVED')}>
        {" "}
        <DoneOutlinedIcon />
      </IconButton>
      <IconButton onClick={() => updateStatus(row.row.id, 'DECLINED')}>
        {" "}
        <CloseOutlinedIcon />
      </IconButton>
      <Button variant="text">Edit</Button>
    </Box>
  );
};

const RenderImage = () => {
  return <img src={logo} alt="prod-im" width="50px" />
};

const RenderStatus = ({ row }) => {
  let status = '';
  if (row.status === 'APPROVED') {
    return <Chip label='Approved' color="success" />
  }
  if (row.status === 'DECLINED') {
    return <Chip label='Missing' sx={{ background: '#ff6e36' }} />
  }
  if (row.status === 'DECLINED-URGENT') {
    return <Chip label='Missing-urgent' color="error" />
  }
  return '';
};

const OrderTable = ({ products, updateStatus }) => {
  const columns = [
    { field: "id", headerName: "", width: 90, renderCell: () => <RenderImage /> },
    {
      field: "name",
      headerName: "Product Name",
      width: 150,
      editable: false,
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 150,
      editable: false,
    },
    {
      field: "unitPrice",
      headerName: "Price",
      type: "number",
      width: 110,
      editable: false,
      valueGetter: (params) => `$ ${params.row.unitPrice}`,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      sortable: false,
      type: "number",
      width: 160,
    },
    {
      field: "total",
      headerName: "Total",
      sortable: false,
      type: "number",
      width: 200,
      valueGetter: (params) =>
        `$ ${params.row.unitPrice * params.row.quantity}`,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      width: 260,
      renderCell: (params) => <RenderStatus row={params.row} />
    },
    {
      field: "actions",
      headerName: "",
      sortable: false,
      type: "actions",
      width: 260,
      renderCell: (data) => <RenderActions row={data} updateStatus={updateStatus} />,
    },
  ];
  const rows = [...products];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{}}
      disableRowSelectionOnClick
      pagination={false}
    />
  );
};

export default OrderTable;
