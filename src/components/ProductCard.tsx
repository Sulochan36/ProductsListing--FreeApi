import type { Product } from "../types/product";

const ProductCard = ({ product }: { product: Product }) => {
    const discountedPrice = (
        product.price *
        (1 - product.discountPercentage / 100)
    ).toFixed(2);

    return (
        <div className="card">
            <img src={product.thumbnail} alt={product.title} />

            <h2>{product.title}</h2>
            <p className="brand">{product.brand}</p>

            <p className="desc">{product.description}</p>

            <div className="price">
                <span className="final">₹{discountedPrice}</span>
                <span className="original">₹{product.price}</span>
            </div>

            <div className="meta">
                <span>⭐ {product.rating}</span>
                <span>📦 {product.stock} left</span>
            </div>

            <button>Add to Cart</button>
        </div>
    );
};

export default ProductCard;