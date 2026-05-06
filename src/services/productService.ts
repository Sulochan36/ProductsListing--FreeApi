import type { ProductResponse } from "../types/product";

const BASE_URL = "/api/api/v1/public/randomproducts";

export const fetchProducts = async (
    page: number,
    query: string
): Promise<ProductResponse> => {
    const url = `${BASE_URL}?page=${page}&limit=10&query=${query}`;

    const res = await fetch(url);
    const json = await res.json();

    if (!res.ok) {
        throw new Error(json.message || "Failed to fetch products");
    }

    return {
        page: json.data.page,
        totalPages: json.data.totalPages,
        nextPage: json.data.nextPage,
        previousPage: json.data.previousPage,
        data: json.data.data,
    };
};