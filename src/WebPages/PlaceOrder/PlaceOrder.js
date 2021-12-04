import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import "./PlaceOrder.css";
const PlaceOrder = () => {
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  const { serviceId } = useParams();
  useEffect(() => {
    fetch(`https://thawing-plains-66619.herokuapp.com/place-order/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.status = "pending";
    console.log(data);
    fetch("https://thawing-plains-66619.herokuapp.com/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="my-div">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <img src={product.image} alt="" />
          <h1> Total Price: {product.price}</h1>
          <h4>Product Description: {product.description} </h4>
        </Grid>
        <Grid item xs={12} md={6}>
          <h2>To Buy Product Please Fillup this Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              defaultValue={product?.name}
              className="p-2 m-2 w-100"
            />
            <br />
            <input
              {...register("date")}
              // placeholder="Name"
              type="date"
              className="p-2 m-2 w-100"
            />
            <br />
            <input
              {...register("address")}
              placeholder="address"
              className="p-2 m-2"
              className="p-2 m-2 w-100"
            />
            <br />

            <input
              {...register("price", { required: true })}
              defaultValue={product?.price}
              className="p-2 m-2"
              className="p-2 m-2 w-100"
            />
            <br />
            <input
              {...register("image", { required: true })}
              defaultValue={product?.image}
              className="p-2 m-2"
              className="p-2 m-2 w-100"
            />
            <br />
            <br />

            {errors.exampleRequired && <span>This field is required</span>}

            <input
              type="submit"
              value="Order Now"
              className="btn btn-info w-50"
            />
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default PlaceOrder;
