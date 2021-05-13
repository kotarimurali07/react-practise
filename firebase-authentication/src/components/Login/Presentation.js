import React from "react";
import { TextField } from "@material-ui/core";
// import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Paper, Button } from "@material-ui/core";
import "../../styles/login.css";
const Presentation = (props) => {
  console.log(props.email);
  const {
    email,
    password,
    handleEmail,
    handlePassword,
    handleClear,
    handleLogin
  } = props;
  console.log(email);
  return (
    <div className="login">
      <div className="login__main">
        <Paper className="login__card" elevation={1} />
        <div className="login__form">
          <h4>LOGIN FORM</h4>
          <form>
            <div className="login__mail">
              <TextField
                value={email}
                // onChange={(e) => {
                //   setemail(e.target.value);
                // }}
                onChange={handleEmail}
                className="mail"
                id="outlined-basic"
                label="email-id"
                variant="outlined"
              />
            </div>
            <div className="login__password">
              <TextField
                value={password}
                className="mail"
                // onChange={(e) => {
                //   setpassword(e.target.value);
                // }}
                onChange={handlePassword}
                id="outlined-basic"
                label="password"
                variant="outlined"
              />
            </div>
            <div className="loginbuttons">
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={handleClear}
              >
                clear
              </Button>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={handleLogin}
              >
                login
              </Button>
            </div>
            <div>
              <h4>forgot password?</h4>
            </div>
            <div className="login__footer"></div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Presentation;
