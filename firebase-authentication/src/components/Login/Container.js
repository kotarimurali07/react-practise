import Presentation from "./Presentation";
import React, { useState, useEffect } from "react";
import onLogin from "../../middleware/middleware";
import { connect } from "react-redux";
const Container = (props) => {
  console.log(props);
  const { _onLogin } = props;

  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");

  const handleClear = () => {
    setemail("");
    setpassword("");
  };
  const handleLogin = (email, password) => {
    _onLogin(email, password);
  };
  const handlePassword = (e) => {
    if (e.target.value.length > 5) {
      setpassword(e.target.value);
      console.log("password succesfull");
    } else {
      setpassword(e.target.value);

      console.log("password failed");
    }
  };
  const handleEmail = (e) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const checkemail = emailPattern.test(e.target.value);
    if (checkemail === true) {
      setemail(e.target.value);

      console.log("login suucessfull");
    } else {
      setemail(e.target.value);

      console.log("login failed");
    }
  };
  return (
    <div>
      <Presentation
        email={email}
        password={password}
        handleEmail={handleEmail}
        handleClear={handleClear}
        handlePassword={handlePassword}
        handleLogin={handleLogin}
      />
    </div>
  );
};
const mapDispatchTOProps = (dispatch) => {
  return {
    _onLogin: (creds) => dispatch(onLogin(creds))
  };
};
export default connect(null, mapDispatchTOProps)(Container);
