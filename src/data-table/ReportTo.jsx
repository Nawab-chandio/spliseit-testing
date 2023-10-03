import React, { useState } from "react";
import "../index.css";
import {Grid, Radio, Input } from "@mui/material";
import { Button, Popover, Space, Modal } from "antd";
import {SearchOutlined,} from "@ant-design/icons";
import Avatar from "@mui/material/Avatar";
import Face6Icon from "@mui/icons-material/Face6";
import CloseIcon from "@mui/icons-material/Close";
import './styling.css';

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

const ReportTo = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleReportTo = () => {
    if (selectedPerson !== null) {
      // Perform the action with the selected person
      console.log("Selected person:", selectedPerson);
    } else {
      // Display an error message or prevent saving if no person is selected
      console.log("Please select a person before saving.");
    }
  };

  // Filter the names array based on the search query
  const filteredNames = names.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const content = (
    <div>
      {/* Add a search input */}
      <Grid container>
      <Input
            placeholder="Search by name..."
            prefix={<SearchOutlined />}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              marginBottom: "12px",
              backgroundColor: "lightgray",
            }}
          />
          </Grid>
      <Grid container>
        {filteredNames.map((person, index) => (
          <Grid item container xs={11} key={index}>
            <Grid item xs={2}>
              <Avatar>{person.pic}</Avatar>
            </Grid>
            <Grid item xs={6}>
              <p className="nameStyle">{person.name}</p>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}
            >
              <Radio
  checked={selectedPerson === person.name}
  onChange={() => setSelectedPerson(person.name)}
  value={person.name}
  className="customRadio"
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

  

  return (
    <Space wrap>
      <Popover
        content={content}
        title={<span style={{ color: "#6271EB" }}>Add Report to</span>}
        trigger="click"
      >
        <Avatar>Report to</Avatar>
      </Popover>
    </Space>
  );
};

export default ReportTo;
