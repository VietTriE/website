import type { LayoutServerLoad } from './$types';
import type { Post } from '$lib/types';

const API_BASE_URL = 'https://viet_tri_api.mkt-viettri.workers.dev/api/products';

const availableType = ["thangTaiKhach", "thangTaiHang", "thangTaiOTo", "thangThucPham", "thangQuanSat", "thangTaiGiuongBenh", "thangTaiRac", "toiTaiHang"];

async function fetchPosts(type: string): Promise<Post[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/${type}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${type}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching ${type}:`, error);
        return [];
    }
}

export const load: LayoutServerLoad = async ({ fetch, params }) => {
    let products: Post[] = [];
    const id = params.id;
    if (availableType.includes(id)) {
        products = await fetchPosts(id);
    }
    return { products, id };
};