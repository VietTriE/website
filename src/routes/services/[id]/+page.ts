import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, params }) => {
    const { services } = await parent();
    const post = Array.isArray(services) ? 
        services.find(service => service.id === params.id) : null;
    
    if (!post) {
        throw new Error('Post not found');
    }

    return { post };
};