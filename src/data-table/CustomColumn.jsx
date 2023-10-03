import React, { useState } from "react";
import "../index.css";
import { Typography, Input } from "@mui/material";
import { Button, Popover, Space, Modal } from "antd";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import NumbersOutlinedIcon from "@mui/icons-material/NumbersOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import TitleOutlinedIcon from "@mui/icons-material/TitleOutlined";

const CustomColumn = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const showModal = (option) => {
    setSelectedOption(option);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log("Selected Option:", selectedOption);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const content = (
    <div id="field-options">
      <Typography style={{ color: "gray", fontSize: "11px", fontWeight: 600 }}>
        CREATE NEW FIELD
      </Typography>
      <p onClick={() => showModal("Text")}>
        <TitleOutlinedIcon /> Text
      </p>
      <p onClick={() => showModal("DropDown")}>
        <ArrowDropDownCircleOutlinedIcon /> DropDown
      </p>
      <p onClick={() => showModal("Number")}>
        <NumbersOutlinedIcon /> Number
      </p>
      <p onClick={() => showModal("Date")}>
        <CalendarTodayOutlinedIcon /> Date
      </p>
      <p onClick={() => showModal("Checkbox")}>
        <CheckBoxOutlinedIcon /> Checkbox
      </p>
      <p onClick={() => showModal("Email")}>
        <EmailOutlinedIcon /> Email
      </p>
      <p onClick={() => showModal("Files")}>
        <AttachFileOutlinedIcon /> Files
      </p>
    </div>
  );

  return (
    <Space wrap>
      <Popover
        content={content}
        title={<span style={{ color: "#6271EB" }}>New Column</span>}
        trigger="click"
      >
        <Button>Hello</Button>
      </Popover>
      <Modal
        title={`Enter ${selectedOption} Field Name`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add Column"
        okButtonProps={{ className: "custom-ok-button" }} 
        cancelButtonProps={{ className: "custom-cancel-button" }}
      >
        <Input
          placeholder={`${selectedOption} Field Name`}
        />
      </Modal>
    </Space>
  );
};

export default CustomColumn;
