import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import Avatar from "../../ui/Avatar/Avatar";
import appDetails from "../../../data/app_details.json";

dayjs.extend(relativeTime);

type Props = {
  onClose: () => void;
};

const AppOverviewDialog = ({ onClose }: Props) => {
  return (
    <Drawer open anchor="right" onClose={onClose}>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>App Overview</Typography>
          <CloseIcon onClick={onClose} />
        </Box>
        <div>{appDetails.name}</div>
        <Box
          sx={{
            padding: 1,
            border: "1px solid #0046c1",
            borderRadius: 2,
            backgroundColor: "#d1e9ff",
          }}
        >
          <Typography>App Name: {appDetails.name}</Typography>
          <Typography>Category: {appDetails.category}</Typography>
          <Typography>Users: {appDetails.users.length}</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography>Connector: </Typography>
            <Avatar
              src={appDetails.connector.logo}
              alt={appDetails.connector.name}
              width={16}
            />
          </Box>
          <Typography>
            Last classification:{" "}
            {dayjs(appDetails.lastClassification).fromNow()}
          </Typography>
        </Box>
        <div>
          <TableContainer component={Paper} sx={{ marginTop: 4 }}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableCell>Username</TableCell>
              </TableHead>
              <TableBody>
                {appDetails.users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell
                      sx={{ display: "flex", alignItems: "center", gap: 2 }}
                    >
                      <Avatar src={user.pic} alt={user.name} /> {user.name}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </Drawer>
  );
};

export default AppOverviewDialog;
