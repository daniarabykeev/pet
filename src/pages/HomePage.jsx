import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { productsContext } from "../contexts/ProductsContext";

function HomePage() {
  const { products, getProducts, deleteProduct } = useContext(productsContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState(searchParams.get("title_like") || "");

  useEffect(() => {
    const obj = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...obj,
      title_like: input,
    });
  }, [input]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Search"
        type="text"
        style={{ marginTop: "50px", marginLeft: "50px" }}
      />
      <div style={{ marginTop: "50px", marginLeft: "50px", display: "flex" }}>
        {products.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                border: "1px solid black",
                width: "300px",
                borderRadius: "9px",
                marginRight: "30px",
              }}
            >
              <div>
                <img
                  style={{
                    width: "300px",
                    height: "200px",
                    borderRadius: "9px",
                  }}
                  src={item.image}
                  alt=""
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "20px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h4>{item.title}</h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "green",
                  }}
                >
                  <h4>{item.price}</h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "5px",
                  }}
                >
                  <button
                    onClick={(e) => {
                      navigate(`/edit/${item.id}`);
                    }}
                  >
                    edit
                  </button>
                  <button
                    onClick={(e) => {
                      deleteProduct(item.id);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
