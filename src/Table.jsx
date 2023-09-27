import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
// import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
// import Dialoge from "./dialog";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { grey } from "@mui/material/colors";
import CustomColumn from "./CustomColumn";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import "./styling.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import {
  GridRowModes,
  DataGrid,
  gridClasses,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { randomId, randomArrayItem } from "@mui/x-data-grid-generator";
import { Grid, MenuItem } from "@mui/material";

const depts = ["Market", "Finance", "Development"];

const randomDept = () => {
  return randomArrayItem(depts);
};

const Dept = ["Manager", "Clerk", "IT Officer"];

const randomRole = () => {
  return randomArrayItem(Dept);
};

const Perms = [
  {
    name: "Assets ",
    color: "#036CEB",
  },
  {
    name: "Risk ",
    color: "#68BC45",
  },
  {
    name: "Solution ",
    color: "#FC3120",
  },
  {
    name: "Audit",
    color: "#484848",
  },
];

const initialRows = [
  {
    id: randomId(),
    name: "Haroon Patel",
    Role: randomRole(),
    permissions: "Asset | Risk | Solution | Audit",
    Email: "nawabcs77@gmail.com",
    Dept: randomDept(),
    report: "Ali",
  },
  {
    id: randomId(),
    name: "Idrees Huri",
    Role: randomRole(),
    permissions: "Asset | Risk | Solution | Audit",
    Email: "nawabcs77@gmail.com",
    Dept: randomDept(),
    report: "Haider",
  },
  {
    id: randomId(),
    name: "Fahad Babar",
    Role: randomRole(),
    permissions: "Asset | Risk | Solution | Audit",
    Email: "nawabcs77@gmail.com",
    Dept: randomDept(),
    report: "Haroon",
  },
  {
    id: randomId(),
    name: "Faisal",
    Role: randomRole(),
    permissions: "Asset | Risk | Solution | Audit",
    Email: "nawabcs77@gmail.com",
    Dept: randomDept(),
    report: "Raheel",
  },
  {
    id: randomId(),
    name: "Haider",
    Role: randomRole(),
    Permissions: "Asset | Risk | Solution | Audit",
    Email: "nawabcs77@gmail.com",
    Dept: randomDept(),
    report: "Ali",
  },
];

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [isAddingNewUser, setIsAddingNewUser] = React.useState(false);
  // const [isDialogOpen, setDialogOpen] = useState(false);
  const [isCustomColumnOpen, setIsCustomColumnOpen] = useState(false);

  // const handleRowEditStop = (params, event) => {
  //   if (params.reason === GridRowEditStopReasons.rowFocusOut) {
  //     event.defaultMuiPrevented = true;
  //   }
  // };

  const handleCustomColumn = () => {
    // alert("hello")
    setIsCustomColumnOpen(true);
  };

  // const handleEditClick = (id) => () => {
  //   setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  //   setIsAddingNewUser(false);
  // };

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: "", Role: "", isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name", color: "red" },
    }));
    setIsAddingNewUser(true);
  };
  console.log("rows", rows);

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

  // const handleControlPointClick = () => {
  //   setDialogOpen(true);
  // };
  const options = ["Manager", "Clerk", "IT Officer", "t"];

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
      alignItems: "left",
      justifyContent: "left",
      renderCell: (params) => (
        <div
          className="customStyle"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <DragIndicatorIcon style={{ color: "gray", fontSize: "1.2rem" }} />
          {params.value}
        </div>
      ),
    },
    {
      field: "Role",
      headerName: "Role",
      width: 180,
      align: "left",
      headerAlign: "left",
      renderCell: (params) => (
        <Grid container style={{border:"none", }}>
          {" "}
          <Autocomplete
            disablePortal
            options={options}
            value={params.value}
            fullWidth
            onChange={(event, newValue) => {
              console.log("New role", newValue);
            }}
            listboxprops={{
              sx: { fontsize: 10 },
            }}
            sx={{
              "& .muiautocomplete-input, & .muiinputlabel-root": {
                fontsize: 10,
              },
            }}
            variant="standard"
            renderInput={(params) => (
              <TextField
                {...params}
            
                sx={{
                  fontFamily: "Lexend",
                  fontSize: 12,
                  "& input:focus": {
                    color: "#6271EB",
                    fontWeight: 600 // Set the text color to green
                  },
                }}
                label={
                  <span
                    style={{
                      fontFamily: "Lexend",
                      fontSize: "14px",
                      fontWeight: 400,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ControlPointIcon style={{ fontSize: "15px" }} />
                    Add Role
                  </span>
                }
              />
            )}
          />
        </Grid>
      ),
    },

    {
      field: "Permissions",
      headerName: "PERMISSIONS",
      type: "singleSelect",
      width: 250,
      align: "left",
      headerAlign: "left",
      renderCell: () => (
        <div className="customStyle">
          {Perms.map((permission, index) => (
            <span key={index} style={{ color: permission.color }}>
              <CircleIcon
                style={{ width: "6px", height: "6px", paddingRight: "2px" }}
              />{" "}
              {permission.name}
              {index !== Perms.length - 1 && (
                <span style={{ margin: "0 5px", color: "gray" }}>|</span>
              )}
            </span>
          ))}
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
        <span className="customStyle">{params.value}</span>
      ),
    },

    {
      field: "report",
      headerName: "REPORT TO",
      width: 150,
      editable: true,
      renderCell: (params) => (
        <span className="customStyle">{params.value}</span>
      ),
    },
    {
      field: "Dept",
      headerName: "Department",
      width: 130,
      editable: true,
      type: "singleSelect",
      renderCell: (params) => (
        <span className="customStyle">{params.value}</span>
      ),
      valueOptions: ["Market", "Finance", "Development"],
    },

    {
      field: "actions",
      type: "actions",
      align: "left",
      headerAlign: "left",
      headerName: (
        <span onClick={() => handleCustomColumn()}>
          <ControlPointIcon style={{ width: "15px", paddingTop: "25px" }} />
        </span>
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
          // <GridActionsCellItem
          //   icon={<EditIcon />}
          //   label="Edit"
          //   className="textPrimary"
          //   onClick={handleEditClick(id)}
          //   color="inherit"
          // />,
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

  const styleRow = {
    border: "none ",
    color: "#829096",
    fontFamily: "Lexend",
    fontWeight: 600,
    fontSize: "11px",
    margin: "10px 0 ",
  };

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
        <Autocomplete
          size="small"
          //  disablePortal
          options={options}
          // value={params.value}
          fullWidth
          onChange={(event, newValue) => {
            // Handle the selected value here, e.g., update the state or row data
            console.log("New role", newValue);
          }}
          // listboxprops={{
          //   sx: { fontsize: 12 },
          // }}
          // sx={{
          //   '& .muiautocomplete-input, & .muiinputlabel-root': {
          //     fontsize: 12,
          //   },
          // }}
          sx={{
            fontFamily: "Lexend",
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              style={{
                fontFamily: "Lexend",
              }}
              label={
                <span
                  style={{
                    fontFamily: "Lexend",
                    fontSize: "14px",
                    fontWeight: 400,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ControlPointIcon style={{ fontSize: "15px" }} />
                  Add Role
                </span>
              }
            />
          )}
        />
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
              {isCustomColumnOpen && <CustomColumn />}
              <Grid
                item
                xs={6.5}
                container
                justifyContent="flex-start"
                alignItems="center"
                style={{ marginBottom: "1rem" }}
              >
                <Button
                  // className="buttonStyle"
                  size="small"
                  style={{
                    backgroundColor: "#E0E3FB",
                    // backgroundColor: "green",

                    color: "#6271EB",
                    // color: "red",

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

            <Box
              sx={{
                height: "calc(100% - 48px)",
                width: "100%",
              }}
            >
              <DataGrid
                rows={rows}
                columns={columns}
                style={styleRow}
                getRowSpacing={getRowSpacing}
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
                  },
                  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
                    borderBottom: "1px",
                  },
                }}
                editMode="row"
                rowSpacingType={rowSpacingType}
                rowHeight={rowHeight}
                rowModesModel={rowModesModel}
                rowBuffer={true}
                onRowModesModelChange={handleRowModesModelChange}
                processRowUpdate={processRowUpdate}
                slots={{
                  toolbar: EditToolbar,
                }}
                slotProps={{
                  toolbar: { setRows, setRowModesModel },
                }}
              />
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
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
