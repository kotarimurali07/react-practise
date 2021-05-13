import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import TableTwo from './TableTwo'
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const rows = [
  {
    pstExp: "16",
    tchgExp: "4.2",
    industryExp: "0",
    researchExp: "0",
    totalExp: "20.2"
  }
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
      <h3 align="left">:PROFESSIONAL EXPERIENCE:</h3>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}> EXP AT SITE</TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                PAST EXP
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                INDUSTRY EXP
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                RESEARCH
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                TOTAL EXP
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.tchgExp} </TableCell>
                <TableCell align="right">{row.pstExp}</TableCell>
                <TableCell align="right">{row.industryExp}</TableCell>
                <TableCell align="right">{row.researchExp}</TableCell>
                <TableCell align="right">{row.totalExp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
