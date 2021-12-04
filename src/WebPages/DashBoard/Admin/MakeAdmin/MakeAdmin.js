import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const setAdmin = (e) => {
    const user = { email };
    alert("clicked");
    e.preventDefault();
    fetch("https://thawing-plains-66619.herokuapp.com/myOrder/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const adminField = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <h1>This is Make Admin Page</h1>
      <form onSubmit={setAdmin}>
        <TextField
          id="standard-basic"
          label="Make Admin"
          type="email"
          variant="standard"
          onBlur={adminField}
        />
        <Button type="submit">Make Admin</Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
