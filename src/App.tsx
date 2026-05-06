import { useEffect, useState } from "react";
import { fetchProducts } from "./services/productService";
import type { Product } from "./types/product";
import ProductGrid from "./components/ProductGrid";
import Pagination from "./components/Pagination";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);

  const loadProducts = async () => {
    try {
      setLoading(true);

      const res = await fetchProducts(page, query);

      setProducts(res.data);
      setHasNext(res.nextPage);
      setHasPrev(res.previousPage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [page, query]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">

        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

          <h1 className="text-xl font-semibold text-gray-800">
            🛍 Product Explorer
          </h1>

          {/* SEARCH */}
          <input
            className="w-full md:w-80 px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Search products..."
            value={query}
            onChange={(e) => {
              setPage(1);
              setQuery(e.target.value);
            }}
          />
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-4 py-10">

        {/* LOADING */}
        {loading ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-72 bg-white rounded-2xl animate-pulse border"
              />
            ))}
          </div>
        ) : (
          <ProductGrid products={products} />
        )}

        {/* PAGINATION */}
        <div className="mt-10">
          <Pagination
            page={page}
            hasNext={hasNext}
            hasPrev={hasPrev}
            onNext={() => setPage((p) => p + 1)}
            onPrev={() => setPage((p) => p - 1)}
          />
        </div>

      </main>
    </div>
  );
}

export default App;