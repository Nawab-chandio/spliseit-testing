import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { grey } from "@mui/material/colors";
import CustomColumn from "./CustomColumn";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import "./styling.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import ReportTo from "./ReportTo";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import {
  GridRowModes,
  DataGrid,
  gridClasses,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { randomId, randomArrayItem } from "@mui/x-data-grid-generator";
import { Avatar, Dialog, Grid, InputAdornment } from "@mui/material";
import { Popover, Space } from "antd";

const role = ["Manager", "Clerk", "IT Officer"];
const Dept = ["Finnance", "Administration", "IT Dept"];

const randomDept = () => {
  return randomArrayItem(Dept);
};

const randomRole = () => {
  return randomArrayItem(Dept);
};

const Perms = [
  {
    name: "Assets",
    color: "#036CEB",
  },
  {
    name: "Risk",
    color: "#68BC45",
  },
  {
    name: "Solution",
    color: "#FC3120",
  },
];

const styleRow = {
  border: "none ",
  fontFamily: "Lexend",
  fontWeight: 600,
  fontSize: "11px",
  margin: "10px 0 ",
};

const initialRows = [
  {
    id: randomId(),
    name: "Haroon Patel",
    Role: randomRole(),
    permissions: "Asset | Risk | Solution ",
    Email: "nawabcs77@gmail.com",
    Dept: randomDept(),
    report: "Ali",
  },
  {
    id: randomId(),
    name: "Idrees Huri",
    Role: randomRole(),
    permissions: "Asset | Risk | Solution ",
    Email: "nawabcs77@gmail.com",
    Dept: randomDept(),
    report: "Haider",
  },
  {
    id: randomId(),
    name: "Fahad Babar",
    Role: randomRole(),
    permissions: "Asset | Risk | Solution ",
    Email: "nawabcs77@gmail.com",
    Dept: randomDept(),
    report: "Haroon",
  },
  {
    id: randomId(),
    name: "Faisal",
    Role: randomRole(),
    permissions: "Asset | Risk | Solution ",
    Email: "nawabcs77@gmail.com",
    Dept: randomDept(),
    report: "Raheel",
  },
  {
    id: randomId(),
    name: "Haider",
    Role: randomRole(),
    Permissions: "Asset | Risk | Solution ",
    Email: "nawabcs77@gmail.com",
    Dept: randomDept(),
    report: "Ali",
  },
];

// const CustomEditor = (params) => {

//   // const handleOnChange= () =>{
//   //   consi
//   // }

//   return <TextField
//     id="outlined-basic"
//     placeholder="Hahaha"
//     variant="outlined"
//     value={params.value}
//     // onChange={handleOnChange}
//   />
// }

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [isAddingNewUser, setIsAddingNewUser] = React.useState(false);
  const [isCustomColumnOpen, setIsCustomColumnOpen] = useState(false);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 160,
      editable: true,
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DragIndicatorIcon style={{ color: "gray", fontSize: "1.2rem" }} />
          <Avatar style={{ width: "25px", height: "25px" }}>
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt="Avatar"
              width="100%"
              height="100%"
            />
          </Avatar>
          &nbsp;
          <TextField
            value={params.value}
            placeholder="Enter name"
            variant="standard"
            InputProps={{ borderBottom: "none" }}
          />
        </div>
      ),
    },

    {
      field: "Role",
      headerName: "Role",
      width: 170,
      type: "singleSelect",
      renderCell: (params) => (
        <Grid container style={{ border: "none" }}>
          <Autocomplete
            disablePortal
            options={role}
            value={params.value}
            fullWidth
            popupIcon={null}
            onChange={(event, newValue) => {
              console.log("New role", newValue);
              params.row.Role = newValue;
            }}
            listboxprops={{
              sx: { fontsize: 11 },
            }}
            sx={{
              "& .muiautocomplete-input, & .muiinputlabel-root": {
                fontsize: 11,
                border: "none",
              },
            }}
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                sx={{
                  fontFamily: "Lexend",
                  fontSize: 11,
                  fontWeight: 400,
                  borderBottom: "none",
                  "& input:focus": {
                    color: "#6271EB",
                    fontWeight: 500,
                  },
                }}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <ControlPointIcon />
                    </InputAdornment>
                  ),
                  // disableUnderline: true,
                }}
                placeholder=" Add New Role"
              />
            )}
          />
        </Grid>
      ),
      valueOptions: ["IT Officer", "Manager", "Boss"],
    },

    {
      field: "Permissions",
      headerName: "PERMISSIONS",
      type: "singleSelect",
      width: 180,
      align: "left",
      headerAlign: "left",
      renderCell: () => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Perms.map((permission, index) => (
            <span key={index} style={{ color: permission.color }}>
              {permission.name}
              {index !== Perms.length - 1 && (
                <span style={{ margin: "0 5px", color: "gray" }}>|</span>
              )}
            </span>
          ))}
          {/* <Space wrap>
            <CustomColumn />
          </Space> */}
        </div>
      ),
    },

    {
      field: "Email",
      headerName: "Email",
      type: "email",
      width: 180,
      editable: true,
      renderCell: (params) => (
        <TextField
          value={params.value}
          placeholder="Enter email"
          variant="standard"
          inputProps={{ borderBottom: "none" }}
        />
      ),
    },

    {
      field: "report",
      headerName: "REPORT TO",
      width: 150,
      editable: true,
      renderCell: (params) => (
        <span
          className="customStyles"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Space wrap>
            <ReportTo />
          </Space>
          &nbsp;
          <TextField
            value={params.value}
            placeholder="Report To"
            variant="standard"
            inputProps={{ borderBottom: "none" }}
          />
        </span>
      ),
    },

    {
      field: "Dept",
      headerName: "Department",
      width: 180,
      type: "singleSelect",
      renderCell: (params) => (
        <Grid container>
          <Autocomplete
            disablePortal
            options={Dept}
            value={params.value}
            fullWidth
            popupIcon={null}
            onChange={(event, newValue) => {
              console.log("New Dept", newValue);
              params.row.Dept = newValue;
            }}
            listboxprops={{
              sx: { fontsize: 11 },
            }}
            sx={{
              "& .muiautocomplete-input, & .muiinputlabel-root": {
                fontsize: 11,
                border: "none",
              },
            }}
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                sx={{
                  fontFamily: "Lexend",
                  fontSize: 11,
                  fontWeight: 400,
                  borderBottom: "none",
                  "& input:focus": {
                    color: "#6271EB",
                    fontWeight: 400,
                  },
                }}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{ color: "#68BC45" }}
                    >
                      <BusinessIcon /> +
                    </InputAdornment>
                  ),
                }}
                placeholder={`Department`}
              />
            )}
          />
        </Grid>
      ),
      valueOptions: ["Market", "Finance", "Development"],
    },

    {
      field: "actions",
      type: "actions",
      align: "left",
      headerAlign: "left",
      headerName: (
        <Space wrap>
          <CustomColumn />
        </Space>
      ),

      width: 80,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
            style={{ paddingLeft: "50px" }}
          />,
        ];
      },
    },
  ];

  const rowHeight = 35;
  const rowSpacingType = "border";

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: "", Role: "", isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name", color: "red" },
    }));
    setIsAddingNewUser(true);
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;
  }

  const getRowSpacing = React.useCallback((params) => {
    return {
      top: params.isFirstVisible ? 0 : 1,
      bottom: params.isLastVisible ? 0 : 1,
    };
  }, []);

  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={9} style={{ marginTop: "1rem" }}>
        <Card
          style={{
            boxShadow: "-5px 0px 0px #68BC45",
            borderRadius: "10px",
            border: "1px solid lightgray",
          }}
        >
          <CardContent>
            <Grid container>
              <Grid item xs={2}>
                <Typography
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Lexend",
                    width: "44px",
                    height: "20px",
                  }}
                >
                  <ArrowCircleDownRoundedIcon
                    style={{ marginRight: "8px", width: "20px", height: "13x" }}
                  />
                  Users
                </Typography>
              </Grid>
              <Grid
                item
                xs={6.5}
                container
                justifyContent="flex-start"
                alignItems="center"
                style={{ marginBottom: "1rem" }}
              >
                <Button
                  size="small"
                  style={{
                    backgroundColor: "#E0E3FB",

                    color: "#6271EB",
                    marginRight: "10px",
                    padding: "0px 10px",
                    textTransform: "capitalize",
                  }}
                >
                  + new user
                </Button>
                <Button
                  className="buttonStyle"
                  size="small"
                  style={{
                    backgroundColor: "#FFE3EF",
                    color: "#FD71AF",
                    marginRight: "10px",
                    padding: "0px 10px",
                    textTransform: "capitalize",
                  }}
                >
                  + New Role
                </Button>
                <Button
                  className="buttonStyle"
                  size="small"
                  style={{
                    backgroundColor: "#E1F2DA",
                    color: "#68BC45",
                    marginRight: "10px",
                    padding: "0px 10px",
                    textTransform: "capitalize",
                  }}
                >
                  + New Department
                </Button>
                <Button
                  className="buttonStyle"
                  size="small"
                  style={{
                    backgroundColor: "#00BEFF",
                    color: "#FFFFFF",
                    marginRight: "10px",
                    padding: "0px 10px",
                    textTransform: "capitalize",
                  }}
                >
                  + Bulk Import
                </Button>
              </Grid>
              <Grid item container xs={3.5}>
                <Grid item xs={4}>
                  <Typography
                    style={{
                      display: "flex",
                      fontSize: "11px",
                      fontWeight: "400",
                      fontFamily: "Lexend",
                    }}
                  >
                    Permission levels
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={7.5}
                  style={{
                    boxShadow: "0px 0px 0px #E7EAEC",
                    border: "1px solid #E7EAEC",
                    height: "20px",
                    borderRadius: "5px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "10px",
                      fontWeight: 400,
                      fontFamily: "lexend",
                    }}
                  >
                    {Perms.map((permission, index) => (
                      <React.Fragment key={index}>
                        <span style={{ color: permission.color }}>
                          <CircleIcon
                            style={{
                              width: "6px",
                              height: "6px",
                              paddingRight: "2px",
                            }}
                          />
                          {permission.name}
                        </span>
                        {index !== Perms.length - 1 && (
                          <span style={{ margin: "0 5px" }}>|</span>
                        )}
                      </React.Fragment>
                    ))}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Box paddingBottom={"15px"}>
              <DataGrid
                rows={rows}
                columns={columns}
                style={styleRow}
                getRowSpacing={getRowSpacing}
                // autoHeight={true}
                // disableVirtualization={true}
                sx={{
                  [`& .${gridClasses.row}`]: {
                    bgcolor: (theme) =>
                      theme.palette.mode === "light" ? grey[200] : grey[900],
                    borderRadius: "4px",
                    border: "1px solid #E7EAEC",
                    backgroundColor: "white",
                    "&:not(:last-child)": {
                      marginBottom: "10px",
                    },
                  },

                  "& .MuiDataGrid-cell:focus": {
                    outline: "none",
                    color: "#6271EB",
                    fontSize: "11px",
                    fontFamily: "Lexend",
                    fontWeight: 600,
                  },
                  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
                    borderBottom: "none",
                  },
                }}
                editMode="row"
                rowSpacingType={rowSpacingType}
                rowHeight={rowHeight}
                rowModesModel={rowModesModel}
                rowBuffer={5}
                onRowModesModelChange={handleRowModesModelChange}
                processRowUpdate={processRowUpdate}
                slots={{
                  toolbar: EditToolbar,
                }}
                slotProps={{
                  toolbar: { setRows, setRowModesModel },
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  className="buttonStyle"
                  size="small"
                  style={{
                    backgroundColor: "#E0E3FB",
                    color: "#6271EB",
                    textTransform: "capitalize",
                    marginRight: "10px",
                    padding: "0px 10px",
                  }}
                  onClick={handleClick}
                >
                  + New User
                </Button>
                <Button
                  size="small"
                  style={{
                    backgroundColor: "#fff",
                    color: "#666666",
                    textTransform: "capitalize",
                    border: "1px solid #E7EAEC",
                    padding: "0px 10px",
                  }}
                >
                  show More <ArrowDownwardIcon style={{ fontSize: "14px" }} />
                </Button>
              </div>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
