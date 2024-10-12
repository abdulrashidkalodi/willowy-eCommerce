import React from "react";
import ProductCard from "../../components/ProductCard";
import "../../styles/Home.css";
import { useSelector } from "react-redux";

function Home() {
  const { filteredProducts, isLoading, isError } = useSelector((state) => state.product);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error fetching products!</h2>;
  }
  console.log(filteredProducts ,"products lsit");
  

  return (
    <div className="App">
      <div className="product-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
