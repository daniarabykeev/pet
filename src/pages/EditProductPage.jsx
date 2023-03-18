import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../contexts/ProductsContext";

const init = {
  title: "",
  price: "",
  category: "",
  image: "",
  image2: "",
  description: "",
};

function EditProductPage() {
  const { oneProduct, getOneProduct, editProduct } =
    useContext(productsContext);
  const [product, setProduct] = useState(init);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  function handleSubmit(e) {
    e.preventDefault();
    editProduct(id, product);
    setProduct(init);
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
    <div style={{ marginTop: "50px", marginLeft: "50px" }}>
      <form
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
        <button>Edit product</button>
      </form>
    </div>
  );
}

export default EditProductPage;
