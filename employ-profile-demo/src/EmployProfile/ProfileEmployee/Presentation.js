import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
import PersonalInformation from "../PersonalInformation";
import EmergencyContact from "../EmergencyContact";
import ProfessionalExperence from "../ProfessionalExperence";
import AcademicBackground from "../AcademicBackground";
import IDECard from "../IDECard";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    },
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item md={3} sm={12} xs={12}>
          <div style={{ margin: "8px" }}>
            <IDECard />
          </div>
        </Grid>
        <Grid item md={9} sm={12} xs={12}>
          <Paper elevation={5} className={classes.paper}>
            {/* <Button variant="contained" color="primary">
              edit
            </Button> */}
            <PersonalInformation />
            <AcademicBackground />
            <ProfessionalExperence />
            <EmergencyContact />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
