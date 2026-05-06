import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }: { products: Product[] }) => {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
};

export default ProductGrid;