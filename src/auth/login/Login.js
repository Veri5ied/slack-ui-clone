import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, googleAuth } from "../../firebaseConfig";

function Login() {
  const signin = () => {
    auth
      .signInWithPopup(googleAuth)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
          alt=""
        />
        <h1>Sign in to Veri5ied's workspace</h1>
        <p>veri5ied.slack.com</p>
        <Button onClick={signin}>SIGN IN WITH GOOGLE ACCOUNT</Button>
      </div>
    </div>
  );
}

export default Login;
