import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import Avatar from "../../ui/Avatar/Avatar";
import apps from "../../../data/apps.json";
import { App } from "../../../types/apps/apps";

type Props = {
  onItemClick: (app: App) => void;
};

type OrderableProperties = keyof Pick<App, "name" | "category" | "connector">;

const AppInventoryTable = ({ onItemClick }: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<OrderableProperties>("name");

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const createSortHandler = (newOrderBy: OrderableProperties) => {
    const isAsc = orderBy === newOrderBy && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(newOrderBy);
  };

  const filteredApps = apps
    .sort((a, b) => {
      if (order === "asc") {
        return a[orderBy].localeCompare(b[orderBy]);
      }

      return b[orderBy].localeCompare(a[orderBy]);
    })
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableCell>
            <TableSortLabel
              active={orderBy === "name"}
              direction={orderBy === "name" ? order : "asc"}
              onClick={() => createSortHandler("name")}
            >
              Name
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={orderBy === "category"}
              direction={orderBy === "category" ? order : "asc"}
              onClick={() => createSortHandler("category")}
            >
              Category
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={orderBy === "connector"}
              direction={orderBy === "connector" ? order : "asc"}
              onClick={() => createSortHandler("connector")}
            >
              Connector
            </TableSortLabel>
          </TableCell>
        </TableHead>
        <TableBody>
          {filteredApps.map((app) => (
            <TableRow
              key={app.appId}
              onClick={() => onItemClick(app)}
              sx={{ cursor: "pointer" }}
            >
              <TableCell>
                <Avatar alt={app.name} src={app.logos.app} />
                <Typography component="span">{app.name}</Typography>
              </TableCell>
              <TableCell>{app.category}</TableCell>
              <TableCell>
                <Avatar alt={app.connector} src={app.logos.connector} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={apps.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default AppInventoryTable;
