import React from 'react';
import FullFeaturedCrudGrid from './data-table/Table';
import { ThemeProvider } from '@emotion/react';
import theme from './Theme';
import CustomDataGrid from './hp';
import CustomColumn from './data-table/CustomColumn';
import ReportTo from './data-table/ReportTo';
import Permission from './data-table/Permission';

const App =() =>{
  return (
    <ThemeProvider theme={theme}>
    <FullFeaturedCrudGrid />
    {/* <CustomColumn /> */}
    <Permission />
    {/* <ReportTo /> */}
  </ThemeProvider>
  );
  }
export default App;