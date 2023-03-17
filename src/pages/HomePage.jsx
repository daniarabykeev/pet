import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../contexts/ProductsContext";

function HomePage() {
  const { products, getProducts } = useContext(productsContext);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ marginTop: "50px", marginLeft: "50px", display: "flex" }}>
      {products.map((item) => {
        return (
          <div
            style={{
              border: "1px solid black",
              width: "300px",
              borderRadius: "9px",
              marginRight: "30px",
            }}
          >
            <div>
              <img
                style={{ width: "300px", height: "200px", borderRadius: "9px" }}
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
                <button>edit</button>
                <button>delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
