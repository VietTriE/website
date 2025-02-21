import type { LayoutServerLoad } from './$types';
import type { Post } from '$lib/types';

const API_BASE_URL = 'https://viet_tri_api.mkt-viettri.workers.dev/api/posts';

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

export const load: LayoutServerLoad = async () => {
    const services = await fetchPosts('services');
    const projects = await fetchPosts('projects');
    const news = await fetchPosts('news');
    
    return {
        services,
        projects,
        news
    };
};