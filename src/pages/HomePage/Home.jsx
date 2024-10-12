import React from "react";
import ProductCard from "../../components/ProductCard";
import "../../styles/Home.css";
function Home() {
  return (
    <div className="App">
      <div className="product-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
      </div>
    </div>
  );
}

export default Home;
