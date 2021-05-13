import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import CardMedia from "@material-ui/core/CardMedia";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

const useStyles = makeStyles(() => ({
  root: {
    // width: 400,
    // height: 450,
    margin: "auto"
  },
  content: {
    padding: 20,
    margin: "80px 0 0 0px",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial, Helvetica, sans-serif"
  },
  cardMediaCss: {
    background: "linear-gradient(#e66465, #9198e5);",
    height: 230,
    paddingTop: 20
  },
  avatar: {
    width: 120,
    height: 120,
    border: "2px solid #fff",
    margin: "0px 265px 0 auto",
    "& > img": {
      margin: 0
    }
  },
  details: {
    padding: 8
  },
  editoption: {
    margin: "-120px 0 0 100px"
  }
}));

export default function Presentation(props) {
  let profile = {};

  const classes = useStyles();

  const cardStyles = useStyles();
  console.log(profile);
  return (
    <Card className={cardStyles.root}>
      <CardMedia className={cardStyles.cardMediaCss}>
        <Avatar
          className={cardStyles.avatar}
          src={
            (profile.href =
              "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg")
          }
        />
        <div className={classes.editoption}></div>

        <div className={cardStyles.content} align="right">
          Dr. D Prasad
          <br />
          S16ECE413 
        </div>
      </CardMedia>
      <CardContent>
        <h2>Contact Information</h2>
        <Divider variant="middle" />
        <div className={cardStyles.details}>
          <EmailOutlinedIcon /> Accounts@sasi.ac.in
        </div>

        <div className={cardStyles.details}>
          <CallOutlinedIcon /> 0147852369321
        </div>

        <div className={cardStyles.details}>
          <HomeOutlinedIcon /> Tadepally gudem
        </div>
      </CardContent>
    </Card>
  );
}
