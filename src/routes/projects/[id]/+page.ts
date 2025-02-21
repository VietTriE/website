import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, params }) => {
    const { projects } = await parent();
    const post = Array.isArray(projects) ? 
    projects.find(project => project.id === params.id) : null;
    
    if (!post) {
        throw new Error('Post not found');
    }

    return { post };
};