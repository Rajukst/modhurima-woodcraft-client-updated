import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(
      `https://thawing-plains-66619.herokuapp.com/myOrder?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  return (
    <div>
      <h1> My Orders Page</h1>
      <TableContainer component={Paper}>
        <Table aria-label="Appoints table">
          <TableHead>
            <TableRow>
              <TableCell>Order Id</TableCell>

              <TableCell align="right">Order Name</TableCell>
              <TableCell align="right">Order Price</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row._id}
                </TableCell>

                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">Pending</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyOrders;
