import React, { useState } from "react";
import { Alert, Grid, TextField, CircularProgress } from "@mui/material";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import registerImage from "../../../images/register.png";
import useAuth from "../../../Hooks/useAuth";
const Registration = () => {
  const [registerUser, setRegisterUser] = useState({});
  const { emailRegistration, loading, user, error } = useAuth();
  // register onSubmit
  const handleRegister = (e) => {
    e.preventDefault();
    if (registerUser.password !== registerUser.password2) {
      alert("Password InCorrect");
      return;
    }
    emailRegistration(registerUser.email, registerUser.password);
  };
  const registerOnChange = (e) => {
    const nameField = e.target.name;
    const fieldValue = e.target.value;
    const newData = { ...registerUser };
    newData[nameField] = fieldValue;
    setRegisterUser(newData);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h1>Please Register</h1>
          {!loading && (
            <form onSubmit={handleRegister}>
              <TextField
                sx={{ width: "50%", m: 3 }}
                id="standard-basic"
                label="UserName"
                variant="standard"
                name="name"
                onChange={registerOnChange}
              />
              <TextField
                sx={{ width: "50%", m: 3 }}
                id="standard-basic"
                label="Your Email"
                variant="standard"
                name="email"
                type="email"
                onChange={registerOnChange}
              />
              <TextField
                sx={{ width: "50%", m: 3 }}
                id="standard-password-input"
                label="Password"
                type="password"
                variant="standard"
                name="password"
                onChange={registerOnChange}
              />
              <TextField
                sx={{ width: "50%", m: 3 }}
                id="standard-password-input"
                label="Retype Password"
                type="password"
                variant="standard"
                name="password2"
                onChange={registerOnChange}
              />
              <br />
              <Button
                type="submit"
                sx={{ width: "50%", m: 3 }}
                variant="outline-primary"
              >
                Register
              </Button>
              <br />
              <Link className="remove" to="/login">
                Already Have an Account? Login Here.
              </Link>
            </form>
          )}
          {loading && <CircularProgress />}
          {user.email && (
            <Alert severity="success">Registration Complete</Alert>
          )}
          {error && <Alert severity="error">{error}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img className="img-fluid" src={registerImage} alt="" />
        </Grid>
      </Grid>
    </>
  );
};

export default Registration;
