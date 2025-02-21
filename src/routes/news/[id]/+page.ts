import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, params }) => {
    const { news } = await parent();
    const post = Array.isArray(news) ? 
    news.find(news => news.id === params.id) : null;
    
    if (!post) {
        throw new Error('Post not found');
    }

    return { post };
};