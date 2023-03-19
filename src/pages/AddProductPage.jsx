import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../contexts/ProductsContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const initState = {
  title: "",
  price: "",
  category: "",
  image: "",
  image2: "",
  description: "",
};

function AddProductPage() {
  const [product, setProduct] = useState(initState);
  const navigate = useNavigate();
  const { addProduct } = useContext(productsContext);

  function handleSubmit(e) {
    e.preventDefault();
    addProduct(product);
    setProduct(initState);
    navigate("/");
  }

  function handleChange(e) {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form
        style={{ display: "flex", flexDirection: "column", width: "400px" }}
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <TextField
          label="title"
          value={product.title}
          onChange={handleChange}
          name="title"
          id="formatted-numberformat-input"
          variant="standard"
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          label="price"
          value={product.price}
          onChange={handleChange}
          name="price"
          id="formatted-numberformat-input"
          variant="standard"
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          label="category"
          value={product.category}
          onChange={handleChange}
          name="category"
          id="formatted-numberformat-input"
          variant="standard"
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          label="image"
          value={product.image}
          onChange={handleChange}
          name="image"
          id="formatted-numberformat-input"
          variant="standard"
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          label="image2"
          value={product.image2}
          onChange={handleChange}
          name="image2"
          id="formatted-numberformat-input"
          variant="standard"
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          label="description"
          value={product.description}
          onChange={handleChange}
          name="description"
          id="formatted-numberformat-input"
          variant="standard"
          sx={{ marginBottom: "20px" }}
        />
        <Button
          variant="contained"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Add
        </Button>
      </form>
    </Box>
  );
}

export default AddProductPage;
