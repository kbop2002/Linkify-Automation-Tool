import React, { useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

const Sidebar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Overview");

  const tabs = ["Overview", "Revenue", "Profit", "Margins", "Overhead"];

  return (
    <Paper sx={{ width: "100%", height: "100vh", padding: 2, border:'none', boxShadow:'none'}}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Dashboard
      </Typography>
      <List>
        {tabs.map((tab) => (
          <ListItem
            button
            key={tab}
            selected={selectedTab === tab}
            onClick={() => setSelectedTab(tab)}
          >
            <ListItemText primary={tab} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Sidebar;
