import React from "react";
import ProductCard from "../components/ProductCard";
import SideBar from "../components/SideBar";
import { productsContext } from "../contexts/ProductsContext";

function HomePage() {
  const { products } = React.useContext(productsContext);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%" }}>
        <SideBar />
      </div>
      <div
        style={{
          marginLeft: "50px",
          marginTop: "50px",
          // border: "1px solid black",
          borderRadius: "9px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
