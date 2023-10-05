import React, { useState } from "react";
import "../index.css";
import { Grid, Radio, Input, InputAdornment } from "@mui/material";
import { Button, Popover, Space } from "antd";
import Avatar from "@mui/material/Avatar";
import Face6Icon from "@mui/icons-material/Face6";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

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

const styles={
display: 'flex',
justifyContent: 'end',
alignItems: "start"
}

const ReportTo = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [popoverVisible, setPopoverVisible] = useState(false); 

  const handleReportTo = () => {
    if (selectedPerson !== null) {
      console.log("Selected person:", selectedPerson);
    } else {
      console.log("Please select a person before saving.");
    }
  };

  const handlePopoverClose = () => {
    setPopoverVisible(false); 
  };

  const filteredNames = names.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const content = (
    <div>
      <Grid
        container
        item
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item container paddingBottom={'20px'}>
          <Grid item xs={6}>
            <span style={{ fontSize: '16px', fontWeight: 500, color: "#6271EB",  }}>Add Report to</span>
          </Grid>
          <Grid item xs={6} style={{color: "#829096", ...styles }}>
            <CloseIcon onClick={handlePopoverClose} /> {/* Close the popover when the close icon is clicked */}
          </Grid>
        </Grid>

        <Grid item container>
          <Input
            placeholder="Search by name..."
            fullWidth
            size="medium"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon style={{ paddingLeft: "10px" }} />
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
              <Grid item container>
                <p className="nameStyle">{person.name}</p>
              </Grid>
              <Grid item container>
                <p
                  style={{
                    color: "#21364166",
                    fontWeight: 300,
                    fontSize: "9px",
                    fontFamily: "Lexend",
                  }}
                >
                  {person.role}
                </p>
              </Grid>
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

  return (
    <Space wrap>
      <Popover
        content={content}
        trigger="click"
        open={popoverVisible} 
        onOpenChange={(visible) => setPopoverVisible(visible)} 
      >
        <Avatar style={{ width: "25px", height: "25px" }} onClick={() => setPopoverVisible(!popoverVisible)}>
          <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt="Avatar"
              width="100%"
              height="100%"
            />
        </Avatar>
      </Popover>
    </Space>
  );
};

export default ReportTo;
