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

const rows = [
  {
    ug: "B.Tech",
    pg: "M.Tech, Ph.D",
    specialization: "Electronic Instrumentation",
    doctorate: "Ph.D.  (ECE)",
    ssc: "74",
    inter: "69",
    diplomo: "",
    degree: "65",
    pg1: "69",
    pg2: ""
  }
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
      <h3 align="left">:ACADEMIC BACKGROUND:</h3>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>
                UNDER GRADUATION
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                POST GRADUATION
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                SPECIALIZATION
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                DOCTORATE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.ug} </TableCell>
                <TableCell align="right">{row.pg}</TableCell>
                <TableCell align="right">{row.specialization}</TableCell>
                <TableCell align="right">{row.doctorate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>SSC</TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                INTER
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                DIPLOMO
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                DEGREE
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                PG1
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                PG2
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.ssc} </TableCell>
                <TableCell align="right">{row.inter}</TableCell>
                <TableCell align="right">{row.diplomo}</TableCell>
                <TableCell align="right">{row.degree}</TableCell>
                <TableCell align="right">{row.pg1}</TableCell>
                <TableCell align="right">{row.pg2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
