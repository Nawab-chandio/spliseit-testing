import { Grid } from '@mui/material';
import React, { useState } from 'react';
import FullFeaturedCrudGrid from './Table';
import { ThemeProvider } from '@emotion/react';
import theme from './Theme';
import CustomDataGrid from './hp';
import CustomColumn from './CustomColumn';
import ReportTo from './ReportTo';

const App =() =>{
  return (
    <ThemeProvider theme={theme}>
    <FullFeaturedCrudGrid />
    <ReportTo />
    <CustomColumn />
  </ThemeProvider>
  );
  }
export default App;