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
    Name: "Dr.DPrasad",
    fatherName: "Kodanda Ramaiah",
    MotherName: "Sivaravamma",
    clgEmail: "dprasad@sasi.ac.in",
    Phone: "9703152444",
    Address: " Dachuru, Kaluvaya Nellore, Andhara Pradesh",
    dOB: "08/08/1965",
    doj: "02.06.2016",
    addharNumber: "965361238806",
    panNumber: "AKRPD8688E",
    doi: "02.06.2016",
    dor: "",
    caste: "OC",
    ratified: ""
  }
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
      <h3 align="left">:PERSONAL INFORMATION:</h3>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>NAME</TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                FATHER NAME
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                MOTHER NAME
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                COLLEGE-EMAIL
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                PHN-NUM
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                ADDRESS
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                DOB
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.Name} </TableCell>
                <TableCell align="right">{row.fatherName}</TableCell>
                <TableCell align="right">{row.MotherName}</TableCell>
                <TableCell align="right">{row.clgEmail}</TableCell>
                <TableCell align="right">{row.Phone}</TableCell>
                <TableCell align="right">{row.Address}</TableCell>
                <TableCell align="right">{row.dOB}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>DoJ</TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                ADDHARR
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                PAN CARD
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                DATE OF INTERVIEW
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                DATE OF REVELING
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                CASTE
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                RATIFIED
              </TableCell>
              {/* <TableCell align="right" style={{ fontWeight: "bold" }}>
                DOJ
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.doj} </TableCell>
                <TableCell align="right">{row.addharNumber}</TableCell>
                <TableCell align="right">{row.panNumber}</TableCell>
                <TableCell align="right">{row.doi}</TableCell>
                <TableCell align="right">{row.dor}</TableCell>
                <TableCell align="right">{row.caste}</TableCell>
                <TableCell align="right">{row.ratified}</TableCell>
                {/* <TableCell align="right">{row.Doj}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TableTwo/> */}
    </div>
  );
}
