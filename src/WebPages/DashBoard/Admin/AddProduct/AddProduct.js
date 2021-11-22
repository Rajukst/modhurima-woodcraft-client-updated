import React, { useRef } from "react";

const AddProduct = () => {
  const addName = useRef();
  const addPrice = useRef();
  const addImage = useRef();
  const addText = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = addName.current.value;
    const price = addPrice.current.value;
    const image = addImage.current.value;
    const description = addText.current.value;
    const totalAdd = { name, price, image, description };
    console.log(totalAdd);
    fetch("https://thawing-plains-66619.herokuapp.com/add-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(totalAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("product added successfully");
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <h1> Add A Product</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name=""
          id=""
          ref={addName}
          placeholder="Product Name"
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={addPrice}
          placeholder="Product Price"
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={addImage}
          placeholder="Product Image or Url"
        />
        <br />
        <br />
        <textarea id="" ref={addText} name="" rows="" cols=""></textarea>
        <br />
        <br />
        <input type="submit" value="Add Your Booking" />
      </form>
    </div>
  );
};

export default AddProduct;
