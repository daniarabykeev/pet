import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../contexts/ProductsContext";

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
    <div
      style={{
        marginTop: "50px",
        marginLeft: "50px",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column", width: "400px" }}
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          placeholder="title"
          name="title"
          value={product.title}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="price"
          name="price"
          value={product.price}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="category"
          name="category"
          value={product.category}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="image"
          name="image"
          value={product.image}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="image2"
          name="image2"
          value={product.image2}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          placeholder="description"
          name="description"
          value={product.description}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button style={{ backgroundColor: "green", color: " white" }}>
          Add product
        </button>
      </form>
    </div>
  );
}

export default AddProductPage;
