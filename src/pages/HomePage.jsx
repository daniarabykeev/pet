import React from "react";
import ProductCard from "../components/ProductCard";
import SideBar from "../components/SideBar";

function HomePage() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%" }}>
        <SideBar />
      </div>
      <ProductCard />
    </div>
  );
}

export default HomePage;
