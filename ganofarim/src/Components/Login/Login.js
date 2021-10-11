import React, { Component, useState } from "react";
import "./Login.css";
import image from "../../Images/chil.jpg";
import { Redirect } from "react-router-dom";
import Gallery from "../Gallery/Gallery";

const Login = () => {
  const [pass, setPass] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onChanePass = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit = () => {
    if (pass === "1234" || pass === "026907691") {
      setRedirect(true);
    } else {
      alert("the password is incorrect");
    }
  };
  if (redirect && pass === "1234")
    // return <Gallery password={this.state.password} />
    return <Redirect to={"/Gallery"} />;
  if (redirect && pass === "026907691") {
    return <Redirect to={"/GalleryAdmin"} />;
  } else
    return (
      <div className="login">
        <form className="form" onSubmit={handleSubmit}>
          <p className="p">התחברות</p>
          <input type="submit" value="התחבר"></input>
          <input
            style={{ textAlign: "right" }}
            type="password"
            placeholder="הזן סיסמא"
            value={pass}
            onChange={onChanePass} //when i change the input
          />
        </form>
      </div>
    );
};

export default Login;
