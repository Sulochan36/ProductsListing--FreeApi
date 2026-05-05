import { useEffect, useState } from "react";
import { fetchRandomProduct } from "./services/productService";
import type { Product } from "./types/product";
import ProductCard from "./components/ProductCard";

function App() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  const getProduct = async () => {
    try {
      setLoading(true);
      const data = await fetchRandomProduct();
      setProduct(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="app">
      <h1>🛍 Product Viewer</h1>

      <button onClick={getProduct}>
        {loading ? "Loading..." : "Get Product"}
      </button>

      {product && !loading && (
        <ProductCard product={product} />
      )}
    </div>
  );
}

export default App;