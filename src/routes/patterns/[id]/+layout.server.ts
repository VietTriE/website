import type { LayoutServerLoad } from './$types';
import type { PatternItem } from '$lib/types';

const API_BASE_URL = 'https://viet_tri_api.mkt-viettri.workers.dev/api/patterns';

const availableType = ["cabin", "cuaTang", "sanCabin", "tranGia", "hoaVanInox", "vatLieu", "tayVin", "hib"];

async function fetchPosts(type: string): Promise<PatternItem[]> {
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
    let patterns: PatternItem[] = [];
    const id = params.id;
    if (availableType.includes(id)) {
        patterns = await fetchPosts(id);
    }
    return { patterns, id };
};