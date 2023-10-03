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
import Permission from "./Permission";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import "./styling.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import BusinessIcon from "@mui/icons-material/Business";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";

import {
  GridRowModes,
  DataGrid,
  gridClasses,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { randomId, randomArrayItem } from "@mui/x-data-grid-generator";
import {
  Avatar,
  Dialog,
  Grid,
  Input,
  InputAdornment,
  Radio,
} from "@mui/material";
import { Popover, Space } from "antd";
import Face6Icon from "@mui/icons-material/Face6";

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

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [isAddingNewUser, setIsAddingNewUser] = React.useState(false);
  const [isCustomColumnOpen, setIsCustomColumnOpen] = useState(false);

  const [selectedPerson, setSelectedPerson] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // REPORT DATA

  const names = [
    {
      name: "Ali",
      pic: <Face6Icon />,
      role: "manager",
    },
    {
      name: "Haider",
      pic: <Face6Icon />,
      role: "Clerk",
    },
    {
      name: "John",
      pic: <Face6Icon />,
      role: "Head",
    },
  ];

  // const handleReportTo = () => {
  //   if (selectedPerson !== null) {
  //     console.log("Selected person:", selectedPerson);
  //   } else {
  //     console.log("Please select a person before saving.");
  //   }
  // };

  const handleReportTo = () => {
    if (selectedPerson !== null) {
      setRows((oldRows) => {
        return oldRows.map((row) => {
          if (row.name === selectedPerson) {
            // Update the "report" field with the selected name
            return { ...row, report: selectedPerson };
          }
          return row;
        });
      });
      console.log("Selected person:", selectedPerson);
    } else {
      console.log("Please select a person before saving.");
    }
  };

  const handleRadioSelect = (selectedName) => {
    setSelectedPerson(selectedName);
  };
  

  const filteredNames = names.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const content = (
    <div>
      {/* Add a search input */}
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          placeholder="Search by name..."
          fullWidth
          size="medium"
          startAdornment={
            <InputAdornment position="start" >
              <SearchIcon style={{paddingLeft:'10px'}}/>
            </InputAdornment>
          }
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            marginBottom: "12px",
            backgroundColor: "#F1F5F8",
            borderRadius: "8px",
            "& .MuiInput-input": {
              fontSize: "16px",
              height: "30px",
              outline: "none",
              boxShadow: "none",
            },
          }}
        />
      </Grid>
      <Grid container>
        {filteredNames.map((person, index) => (
          <Grid
            item
            container
            xs={12}
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "10px",
            }}
          >
            <Grid item xs={2}>
              <Avatar>{person.pic}</Avatar>
            </Grid>
            <Grid item xs={4}>
              <Grid item container><p className="nameStyle">{person.name}</p></Grid>
              <Grid item container><p style={{color: "#21364166", fontWeight:300, fontSize:'9px', fontFamily:'Lexend'}}>{person.name}</p></Grid>
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Radio
                checked={selectedPerson === person.name}
                onChange={() => setSelectedPerson(person.name)}
                value={person.name}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid
        item
        container
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "flex-end",
        }}
      >
        <Button
          onClick={handleReportTo}
          style={{
            backgroundColor: "#6271EB",
            color: "white",
            width: "98px",
            height: "32px",
            borderRadius: "6px",
            border: "0",
          }}
        >
          Save
        </Button>
      </Grid>
    </div>
  );

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 160,
      editable: true,
      valueGetter: (params) => {
        if (!params.value) {
          return "User name"; 
        }
        return params.value;
      },
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
          </Avatar>{" "}
          &nbsp;
          {params.value}
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
            }}
            listboxprops={{
              sx: { fontsize: 11 },
            }}
            sx={{
              "& .muiautocomplete-input, & .muiinputlabel-root": {
                fontsize: 11,
              },
            }}
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                sx={{
                  fontFamily: "Lexend",
                  fontSize: 11,
                  "& input:focus": {
                    color: "#6271EB",
                    fontWeight: 500,
                  },
                }}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <ControlPointIcon />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
                placeholder=" Add New Role"
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
      width: 200,
      align: "left",
      headerAlign: "left",
      // placeholder: 'add permission',
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
              {/* <CircleIcon
                style={{ width: "6px", height: "6px", paddingRight: "2px" }}
              />{" "} */}
              {permission.name}
              {index !== Perms.length - 1 && (
                <span style={{ margin: "0 5px", color: "gray" }}>|</span>
              )}
            </span>
          ))}
          <span>
            <ExpandMoreIcon onClick={handlePermission} />
          </span>
        </div>
      ),
    },

    {
      field: "Email",
      headerName: "Email",
      type: "email",
      width: 150,
      editable: true,
      renderCell: (params) => (
        <span className="customStyles">
          {params.value ? (
            params.value
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <EmailIcon style={{ fontSize: 16 }} />
              
              <span style={{ marginRight: "4px" }}placeholder="Email Placeholder"></span>
            </div>
          )}
        </span>
      ),
    },
    
    

    {
      field: "report",
      headerName: "REPORT TO",
      width: 150,
      editable: true,
      valueGetter: (param) =>{
        if (!param.value){
          return "Report to"
        }
        return param.value;
      },
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
            <Popover
              style={{ border: "1px solid red" }}
              content={content}
              title={<span style={{ color: "#6271EB" }}>Add Report to</span>}
              trigger="click"
            >
              <Avatar style={{ width: "25px", height: "25px" }}>
                <img
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                  alt="Avatar"
                  width="100%"
                  height="100%"
                />
              </Avatar>
            </Popover>
          </Space>
          &nbsp;{params.value}
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
        <ControlPointIcon style={{ width: "15px", paddingTop: "25px" }} />
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

  const handlePermission = () => {
    setIsCustomColumnOpen(true);
  };

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

            <Dialog open={isCustomColumnOpen}>
              {/* <DialogContent> */}
              {isCustomColumnOpen && <CustomColumn />}
              {/* </DialogContent> */}
            </Dialog>

            <Box paddingBottom={"15px"}>
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