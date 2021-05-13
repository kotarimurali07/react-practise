import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(Name, PhoneNumber, Email) {
  return { Name, PhoneNumber, Email };
}

const rows = [createData("Prasad", "0098173838", "prasad@sasi.ac.in")];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
      <h3 align="left">:EMERGENCY CONTACT:</h3>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                PhoneNumber
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell> {row.Name}</TableCell>
                <TableCell align="right">{row.PhoneNumber}</TableCell>
                <TableCell align="right">{row.Email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
