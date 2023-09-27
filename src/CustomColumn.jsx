import React from "react";
import "./index.css";
import {Typography} from "@mui/material"
import { Button, Popover, Space, Grid, Modal,   } from "antd";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import TitleOutlinedIcon from '@mui/icons-material/TitleOutlined';

const handleText = (param) => {
  console.log(param)

  // <Modal title="Basic Modal">
  //     <p>Some contents...</p>
  //     <p>Some contents...</p>
  //     <p>Some contents...</p>
  //   </Modal>
};


const content = (
  <div id='field-options'>
    
    <Typography style={{color: 'gray', fontSize:'11px', fontWeight:600}}> CREATE NEW FIELD</Typography>
    <p onClick={() => handleText('test')}> <TitleOutlinedIcon /> Text</p>
    <p onClick={() => handleText("dropDown")}> <ArrowDropDownCircleOutlinedIcon /> DropDown</p>
    <p onClick={handleText}>< NumbersOutlinedIcon /> Number</p>
    <p onClick={handleText}>< CalendarTodayOutlinedIcon /> Date</p>
    <p onClick={handleText}>< CheckBoxOutlinedIcon /> Checkbox</p>
    <p onClick={handleText}>< EmailOutlinedIcon /> Email</p>
    <p onClick={handleText}>< AttachFileOutlinedIcon /> Files</p>
  </div>
);

const CustomColumn = () => (
  <Space wrap>

    <Popover content={content} title={<span style={{ color: "#6271EB" }}>New Column</span>} trigger="click">
      <Button>Click me</Button>
    </Popover>
  </Space>
);

export default CustomColumn;
