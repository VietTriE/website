<script lang="ts">
    interface Section {
        type: string;
        content?: string[];
    }

    interface Project {
        id: string;
        title: string;
        type: string;
        thumbnail: string;
        sections: Section[];
    }

    let { projects } = $props<{ projects: Project[] }>();
    let displayedProjects = $derived(projects.slice(0, 6));

    function getProjectSpecs(sections: Section[]) {
        const specs = {
            taiTrong: '',
            tocDo: '',
            soDiemDung: '',
            soLuongThang: ''
        };

        const paragraphSection = sections.find(s => s.type === 'paragraph');
        if (paragraphSection && paragraphSection.content) {
            const content = paragraphSection.content.join('\n');
            const taiTrongMatch = content.match(/Tải trọng: (\d+)/);
            const tocDoMatch = content.match(/Tốc độ: (\d+)/);
            const diemDungMatch = content.match(/Số điểm dừng: (\d+)/);
            const soLuongThangMatch = content.match(/Số lượng thang: (\d+)/);

            if (taiTrongMatch) specs.taiTrong = taiTrongMatch[1];
            if (tocDoMatch) specs.tocDo = tocDoMatch[1];
            if (diemDungMatch) specs.soDiemDung = diemDungMatch[1];
            if (soLuongThangMatch) specs.soLuongThang = soLuongThangMatch[1];
        }

        return specs;
    }
</script>

<section class="bg-slate-100 py-6 md:py-12 px-4">
    <div class=" md:container md:mx-auto">
        <div class="flex items-center gap-3 mt-4 lg:mt-10 mb-12 lg:mb-16 lg:gap-6">
            <div class="w-2 h-8 bg-blue-700"></div>
            <div class="flex items-center w-full justify-between">
                <span class="text-xl md:text-2xl lg:text-3xl"><strong>DỰ ÁN TIÊU BIỂU</strong></span>
                <a 
                href="/projects" 
                class="text-xs lg:text-xl text-blue-600 hover:text-blue-800 hover:underline inline-block"
            >
                Xem tất cả
            </a>
            </div>
        </div>
        
        <div class="grid grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
            {#each displayedProjects as project}
                <a 
                    href={`/projects/${project.id}`} 
                    class="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                    <div class="relative aspect-[4/3] overflow-hidden p-2">
                        <img 
                            src={project.thumbnail} 
                            alt={project.title}
                            class="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div class="p-2 md:p-4">
                        <h3 class="text-sm md:text-lg font-semibold mb-1 md:mb-4 group-hover:text-blue-700 transition-colors">
                            {project.title}
                        </h3>
                        {#if project.sections.length > 0}
                            {@const specs = getProjectSpecs(project.sections)}
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 text-sm text-slate-600">
                                <div class="flex items-center gap-2">
                                    <div class="font-medium">Tải trọng :</div>
                                    <div>{specs.taiTrong} kg</div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <div class="font-medium">Tốc độ :</div>
                                    <div>{specs.tocDo} m/phút</div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <div class="font-medium">Số điểm dừng :</div>
                                    <div>{specs.soDiemDung}</div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <div class="font-medium">Số lượng thang :</div>
                                    <div>{specs.soLuongThang}</div>
                                </div>
                            </div>
                        {/if}
                    </div>
                </a>
            {/each}
        </div>

    </div>
</section>