import React from "react";
import ProductCard from "../../components/ProductCard";
import "../../styles/Home.css";
import { useSelector } from "react-redux";
import Cart from "../../components/Cart";

function Home() {
  const { products_data, isLoading, isError } = useSelector((state) => state.product);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error fetching products!</h2>;
  }

  return (
    <div className="App">
      <Cart/>
      <div className="product-container">
        {products_data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
