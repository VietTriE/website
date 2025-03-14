<script lang="ts">
    interface Section {
        type: string;
        content: string[];
    }

    interface Service {
        id: string;
        title: string;
        type: string;
        thumbnail: string;
        sections: Section[];
    }

    let { services } = $props<{ services: Service[] }>();
</script>

<section class=" bg-blue-100 py-8 md:py-16 px-4">
    <div class=" md:container md:mx-auto">
        <h2 class="text-xl md:text-3xl font-bold mt-4 lg:mt-10 mb-12 lg:mb-16 flex items-center">
            <span class="w-2 h-6 lg:h-8 bg-blue-700 mr-3"></span>
            DỊCH VỤ CỦA CHÚNG TÔI
        </h2>
        
        <div class="grid grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8 pb-12">
            {#each services as service}
                <a 
                    href={`/services/${service.id}`} 
                    class="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <div class="relative aspect-[4/3] overflow-hidden">
                        <img 
                            src={service.thumbnail} 
                            alt={service.title}
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div class="p-2 md:p-4">
                        <h3 class="text-xs md:text-lg font-semibold text-center group-hover:text-blue-700 transition-colors">
                            {service.title}
                        </h3>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>