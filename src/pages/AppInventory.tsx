import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router";
import AppInventoryTable from "../components/app/AppInventoryTable/AppInventoryTable";
import AppOverviewDialog from "../components/app/AppOverviewDialog/AppOverviewDialog";
import { App } from "../types/apps/apps";

const AppInventory = () => {
  const [selectedApp, setSelectedApp] = useState<App | null>(null);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <NavLink to="/">
            <Typography sx={{ color: "white" }} component="span">
              Reco
            </Typography>
          </NavLink>
          <NavLink
            to="/app-inventory"
            style={({ isActive }) => ({
              borderBottom: isActive ? "1px solid white" : "none",
              marginLeft: 8,
            })}
          >
            <Typography sx={{ color: "white" }} component="span">
              Apps
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: 4, width: "100%" }}>
        <Typography component="h3" sx={{ marginBottom: 4 }}>
          App Inventory
        </Typography>
        {!!selectedApp && (
          <AppOverviewDialog onClose={() => setSelectedApp(null)} />
        )}
        <AppInventoryTable onItemClick={setSelectedApp} />
      </Box>
    </>
  );
};

export default AppInventory;
