import type { Product } from "../types/product";

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="bg-white rounded-2xl border hover:shadow-lg transition overflow-hidden group">

            {/* IMAGE */}
            <div className="overflow-hidden bg-gray-50">
                <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="h-52 w-full object-contain group-hover:scale-105 transition duration-300"
                />
            </div>

            {/* CONTENT */}
            <div className="p-4 space-y-2">

                {/* TITLE */}
                <h3 className="font-medium text-gray-800 line-clamp-1">
                    {product.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-500 line-clamp-2">
                    {product.description}
                </p>

                {/* META */}
                <div className="flex items-center justify-between pt-2">

                    <span className="text-lg font-semibold text-gray-900">
                        ₹{product.price}
                    </span>

                    <span className="text-sm text-yellow-600">
                        ⭐ {product.rating}
                    </span>

                </div>

                {/* BRAND */}
                <p className="text-xs text-gray-400">
                    {product.brand}
                </p>

            </div>
        </div>
    );
};

export default ProductCard;