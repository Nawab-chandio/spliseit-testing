import React, { useState } from 'react';
import { Grid, Typography, Icon, Dialog, DialogTitle, DialogContent } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessIcon from '@mui/icons-material/Business';

const categories = ["Asset", "Risk", "Solution", "User", "Audit", "Report"];

function Permission() {
  const [selectedIcons, setSelectedIcons] = useState({});

  const handleIconClick = (category, iconName) => {
    setSelectedIcons((prevIcons) => ({
      ...prevIcons,
      [category]: iconName,
    }));
    console.log(`Selected ${iconName} for ${category}`);
  };

  const iconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#829096',
    fontSize: '11px',
    fontWeight: 600,
  };

  const renderCategories = () => (
    <>
      {categories.map((category) => (
        <Grid item xs={2} key={category}>
          <Typography style={{ paddingBottom: '20px' }}>{category}</Typography>
          <Grid container item style={{ border: '1px solid red', ...iconStyle }}>
            <Grid item xs={4}><PersonIcon onClick={() => handleIconClick(category, "Person")} /></Grid>
            <Grid item xs={4}><GroupsIcon onClick={() => handleIconClick(category, "Groups")} /></Grid>
            <Grid item xs={4}><BusinessIcon onClick={() => handleIconClick(category, "Business")} /></Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );

  return (
    <Grid container spacing={2}>
      <Grid container item xs={12} justifyContent="space-between">
        <Grid item xs={6}>
          <Typography style={{ color: "#6271EB", fontSize: '16px', fontWeight: 500 }}>Permission</Typography>
        </Grid>
        <Grid item xs={6}><Typography>Levels</Typography></Grid>
      </Grid>

      <Grid container item xs={12}>
        {renderCategories()}
      </Grid>
    </Grid>
  );
}

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Dialog</button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Permission Dialog</DialogTitle>
        <DialogContent>
          <Permission />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
