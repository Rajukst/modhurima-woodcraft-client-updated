import { Grid, TextField, CircularProgress, Alert } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import loginImage from "../../../images/login.png";
const Login = () => {
  const [loginUser, setLoginUser] = useState({});
  const { user, signInUser, loading, error } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const loginSubmit = (e) => {
    signInUser(loginUser.email, loginUser.password, location, history);
    e.preventDefault();
  };
  const loginOnChange = (e) => {
    const nameField = e.target.name;
    const fieldValue = e.target.value;
    const newData = { ...loginUser };
    newData[nameField] = fieldValue;
    setLoginUser(newData);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h1>Please Login</h1>
          <form onSubmit={loginSubmit}>
            <TextField
              sx={{ width: "50%", m: 3 }}
              id="standard-basic"
              label="Your Email"
              variant="standard"
              name="email"
              onChange={loginOnChange}
            />
            <TextField
              sx={{ width: "50%", m: 3 }}
              id="standard-password-input"
              label="Your Password"
              type="password"
              variant="standard"
              name="password"
              onChange={loginOnChange}
            />
            <br />
            <Button
              type="submit"
              sx={{ width: "50%", m: 3 }}
              variant="outline-primary"
            >
              Login
            </Button>
            <Link to="/register">New User? Sign Up Here.</Link>
            {loading && <CircularProgress />}
            {user.email && (
              <Alert severity="success">SuccessFully Logged In</Alert>
            )}
            {error && <Alert severity="error">{error}</Alert>}
          </form>
        </Grid>

        <Grid item xs={12} md={6}>
          <img className="img-fluid" src={loginImage} alt="" />
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
