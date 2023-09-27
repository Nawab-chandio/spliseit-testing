import React, { useState } from 'react';
import { GridRowModes,
  GridActionsCellItem, GridRowEditStopReasons, DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button } from 'antd';

function CustomNewRow(props) {
  return (
    <div>
      {/* Customize this placeholder text as needed */}
      <div>Add a new row here</div>
      <div>
        <button onClick={props.onAddRow}>Add</button>
        <button onClick={props.onCancel}>Cancel</button>
      </div>
    </div>
  );
}

function CustomDataGrid() {
  const [newRows, setNewRows] = useState('');
  const [rowModesModel, setRowModesModel] = useState('');
  const [isAddingNewUser, setIsAddingNewUser] = useState(false);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
      // renderCell: renderNameCell,
    },
    {
      field: "role",
      headerName: "Role",
      width: 150,
      editable: true,
      // renderCell: renderNameCell,
    },
    {
      field: "permissions",
      headerName: "Permissions",
      width: 150,
      editable: true,
      // renderCell: renderNameCell,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
      // renderCell: renderNameCell,
    },
    {
      field: "dept",
      headerName: "Department",
      width: 150,
      editable: true,
      // renderCell: renderNameCell,
    },
    {
      field: "report",
      headerName: "Reporting To",
      width: 150,
      editable: true,
      // renderCell: renderNameCell,
    },
  ];

  const rows = [
      {
        id: 1001,
        name: "Haroon Patel",
        Role: 'Pakhma',
        permissions: "Asset | Risk | Solution | Audit",
        Email: "nawabcs77@gmail.com",
        Dept: 'Finance',
        report: "Ali",
      },
      {
        id: 1002,
        name: "Idrees Huri",
        Role: 'Pakhma',
        permissions: "Asset | Risk | Solution | Audit",
        Email: "nawabcs77@gmail.com",
        Dept: 'Finance',
        report: "Ali",
      },
      {
        id: 1003,
        name: "Fahad Babar",
        Role: 'Pakhma',
        permissions: "Asset | Risk | Solution | Audit",
        Email: "nawabcs77@gmail.com",
        Dept: 'Finance',
        report: "Ali",
      },
      {
        id: 1004,
        name: "Faisal",
        Role: 'Pakhma',
        permissions: "Asset | Risk | Solution | Audit",
        Email: "nawabcs77@gmail.com",
        Dept: 'Finance',
        report: "Ali",
      },
      {
        id: 1005,
        name: "Haider",
        Role: 'Pakhma',
        Permissions: "Asset | Risk | Solution | Audit",
        Email: "nawabcs77@gmail.com",
        Dept: 'Finance',
        report: "Ali",
      },
    ];


  const handleAddRow = () => {
    // Handle adding the new row to your data source
    const id = 1006;
    setNewRows((oldRows) => [...oldRows, { id, name: "", Role: "", isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name", label: "red" },
    }));
    setIsAddingNewUser(true);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
      />
      <Button onClick={handleAddRow}>New </Button>
    </div>
  );
}

export default CustomDataGrid;
