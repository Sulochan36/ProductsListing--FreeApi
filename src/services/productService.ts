import type { ProductApiResponse } from "../types/product";

const API_URL =
    "https://api.freeapi.app/api/v1/public/randomproducts/product/random";

export const fetchRandomProduct = async () => {
    const res = await fetch(API_URL);

    if (!res.ok) {
        throw new Error("Failed to fetch product");
    }

    const data: ProductApiResponse = await res.json();

    return {
        ...data.data,
        images: data.data.images ?? [],
    };
};